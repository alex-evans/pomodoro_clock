import {
    DECREASE_TIME,
    INCREASE_TIME,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESTART
} from "../actionTypes";

const initialState = {
    breakLength: 5,
    sessionLength: 20,
    timerRunning: false,
    timerTime: "20:00",
    currentRun: "Session"
}

const decreaseTime = (curTime) => curTime > 0 ? curTime - 1 : 0
const increaseTime = (curTime) => curTime < 60 ? curTime + 1 : 60

export default function(state=initialState, action) {
    switch (action.type) {
        case DECREASE_TIME: {
            if (action.timingType === 'break') {
                const newBreakLength = decreaseTime(state.breakLength)
                return {
                    ...state,
                    breakLength: newBreakLength
                }
            }
            const newSessionLength = decreaseTime(state.sessionLength)
            return {
                ...state,
                sessionLength: newSessionLength
            }
        }

        case INCREASE_TIME: {
            if (action.timingType === 'break') {
                const newBreakLength = increaseTime(state.breakLength)
                return {
                    ...state,
                    breakLength: newBreakLength
                }
            }
            const newSessionLength = increaseTime(state.sessionLength)
            return {
                ...state,
                sessionLength: newSessionLength
            }
        }

        case TIMER_START: {
            return state
        }

        case TIMER_PAUSE: {
            return state
        }

        case TIMER_RESTART: {
            return state
        }

        default:
            return state
    }
};