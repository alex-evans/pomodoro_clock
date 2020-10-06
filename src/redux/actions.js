import { 
    AC_PRESSED, 
    DEC_PRESSED, 
    NUMBER_PRESSED, 
    OPERATOR_PRESSED,
    EQUAL_PRESSED
} from "./actionTypes";

export const opperatorPressed = buttonId => ({
    type: OPERATOR_PRESSED,
    buttonId: buttonId
});

export const acPressed = buttonId => ({
    type: AC_PRESSED,
    buttonId: buttonId
});

export const decPressed = buttonId => ({
    type: DEC_PRESSED,
    buttonId: buttonId
});

export const numberPressed = buttonId => ({
    type: NUMBER_PRESSED,
    buttonId: buttonId
});

export const equalPressed = buttonId => ({
    type: EQUAL_PRESSED,
    buttonId: buttonId
});