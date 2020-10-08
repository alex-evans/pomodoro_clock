import {
    DECREASE_TIME,
    INCREASE_TIME,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESTART,
    TIMER_RUN_SECOND
} from "./actionTypes";

export const decreaseTime = timingType => ({
    type: DECREASE_TIME,
    timingType: timingType
});

export const increaseTime = timingType => ({
    type: INCREASE_TIME,
    timingType: timingType
});

export const timerStart = (timerId, audio) => ({
    type: TIMER_START,
    timerId: timerId,
    buzzer: audio
});

export const timerPause = () => ({
    type: TIMER_PAUSE
});

export const timerRestart = () => ({
    type: TIMER_RESTART
});

export const timerRunSecond = () => ({
    type: TIMER_RUN_SECOND
});
