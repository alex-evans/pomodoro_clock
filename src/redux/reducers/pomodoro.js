import {
    DECREASE_TIME,
    INCREASE_TIME,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESTART,
    TIMER_RUN_SECOND
} from "../actionTypes";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    timerRunning: false,
    timerSecs: 1500,
    currentRun: "Session",
    timerId: ''
};

const decreaseTime = (curTime) => curTime > 0 ? curTime - 1 : 0;
const increaseTime = (curTime) => curTime < 60 ? curTime + 1 : 60;

export default function(state=initialState, action) {
    switch (action.type) {

        case DECREASE_TIME: {

            if (state.timerRunning) {
                return state
            }

            if (action.timingType === 'Break') {
                const newBreakLength = decreaseTime(state.breakLength)
                const timerSecs = action.timingType === state.currentRun ? newBreakLength * 60 : state.timerSecs
                return {
                    ...state,
                    breakLength: newBreakLength,
                    timerSecs: timerSecs
                }
            }
            const newSessionLength = decreaseTime(state.sessionLength)
            const timerSecs = action.timingType === state.currentRun ? newSessionLength * 60 : state.timerSecs
            return {
                ...state,
                sessionLength: newSessionLength,
                timerSecs: timerSecs
            }
        }

        case INCREASE_TIME: {

            if (state.timerRunning) {
                return state
            }

            if (action.timingType === 'break') {
                const newBreakLength = increaseTime(state.breakLength)
                const timerSecs = action.timingType === state.currentRun ? newBreakLength * 60 : state.timerSecs
                return {
                    ...state,
                    breakLength: newBreakLength,
                    timerSecs: timerSecs
                }
            }
            const newSessionLength = increaseTime(state.sessionLength)
            const timerSecs = action.timingType === state.currentRun ? newSessionLength * 60 : state.timerSecs
            return {
                ...state,
                sessionLength: newSessionLength,
                timerSecs: timerSecs
            }
        }

        case TIMER_START: {
            return {
                ...state,
                timerRunning: true,
                timerId: action.timerId
            }
        }

        case TIMER_PAUSE: {
            return {
                ...state,
                timerRunning: false
            }
        }

        case TIMER_RESTART: {
            return initialState
        }

        case TIMER_RUN_SECOND: {
            const newTime = decreaseTime(state.timerSecs)
            return {
                ...state,
                timerSecs: newTime
            }
        }

        default:
            return state
    }
};