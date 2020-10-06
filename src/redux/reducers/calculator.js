import { evaluate } from 'mathjs';

import { 
    OPERATOR_PRESSED,
    AC_PRESSED, 
    DEC_PRESSED, 
    NUMBER_PRESSED, 
    EQUAL_PRESSED
} from "../actionTypes";

const initialState = {
    value: '0',
    inputString: ''
}

const containsNumber = /\d/;
const lastInputNumber = /\d$/;
const lastInputOperator = /[+\-x/]$/;
const lastInputDecimal = /[.]$/;
const lastInputNegative = /[^+x/]-$/;

export default function(state = initialState, action) {
    const newInput = state.inputString + ' ' + action.buttonId;
    const newInputNoSpace = state.inputString + action.buttonId;
    
    switch (action.type) {
        
        case OPERATOR_PRESSED: {
            if (state.inputString === '' && state.value !== '0') {
                let oldValueWithNewOperator = state.value + ' ' + action.buttonId;
                return {
                    value: action.buttonId,
                    inputString: oldValueWithNewOperator
                }
            }

            if ((state.inputString === '') && (action.buttonId === '-')) {
                return {
                    value: action.buttonId,
                    inputString: '-'
                }
            }
            if (state.inputString === '') {
                return {
                    ...state,
                    value: action.buttonId
                }
            }
            if (lastInputNegative.test(state.inputString)) {
                return {
                    ...state,
                    value: action.buttonId
                }
            }
            if (lastInputOperator.test(state.inputString) && action.buttonId === '-') {
                return {
                    value: action.buttonId,
                    inputString: newInput
                }
            }
            if (lastInputOperator.test(state.inputString)) {
                return {
                    ...state,
                    value: action.buttonId
                }
            }
            return {
                value: action.buttonId,
                inputString: newInput
            }
        };

        case NUMBER_PRESSED: {
            
            if (state.inputString === '') {
                return {
                    value: action.buttonId,
                    inputString: newInput
                }
            }
            if (lastInputNumber.test(state.inputString) || lastInputDecimal.test(state.inputString) || lastInputNegative.test(state.inputString)) {
                const newInputArray = state.inputString.split(" ")
                const lastItem = newInputArray.slice(-1)    
                const updatedNumber = lastItem + action.buttonId
            
                return {
                    value: updatedNumber,
                    inputString: newInputNoSpace
                }
            }
            return {
                value: action.buttonId,
                inputString: newInput
            }
        };

        case DEC_PRESSED: {
            if (state.inputString.includes('.')) {
                return state
            }
            if (lastInputNumber.test(state.inputString)) {
                const newInputArray = state.inputString.split(" ")
                const lastItem = newInputArray.slice(-1)
                const updatedNumber = lastItem + action.buttonId
            
                return {
                    value: updatedNumber,
                    inputString: newInputNoSpace
                }
            }
            return {
                ...state,
                value: action.buttonId
            }
        };

        case AC_PRESSED: {
            return initialState
        };

        case EQUAL_PRESSED: {
            if (!containsNumber.test(state.inputString)) {
                return {
                    ...state,
                    value: action.buttonId
                }
            }
            if (lastInputOperator.test(state.inputString)) {
                return {
                    ...state,
                    value: action.buttonId
                }
            }
            const solution = evaluate(state.inputString.replace('x', '*'))
            return {
                value: solution,
                inputString: ''
            }
        };

        default:
            return state;
    }
};