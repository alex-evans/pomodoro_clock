import {
    DECREASE_TIME,
    INCREASE_TIME,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESTART
} from "./actionTypes";

export const decreaseTime = timingType => ({
    type: DECREASE_TIME,
    timingType: timingType
});

export const increaseTime = timingType => ({
    type: INCREASE_TIME,
    timingType: timingType
});

export const timerStart = {
    type: TIMER_START
};

export const timerPause = {
    type: TIMER_PAUSE
};

export const timerRestart = {
    type: TIMER_RESTART
};