import ActionTypes from './types.js';

export const startTimer = (from_date) => {
    return {
        type: ActionTypes.START_TIMER,
        from_date
    };
}

export const stopTimer = () => {
    return {
        type: ActionTypes.STOP_TIMER,
        project,
        description,
        billable,
        from_date,
        to_date
    };
}
