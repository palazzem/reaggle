import { combineReducers } from 'redux';
import ActionTypes from '../actions/types.js';

/**
{
    timer: {
    },
    entries: [
    ]
}
*/

const initialTimerState = {
    project: 'a project',
    description: 'some description of foo'
    billable: false,
    from_date: null,
    elapsed: 0
}

/** Timer reducer handles
 */
const timer = (state = initialTimerState, action) => {
    switch (action.type) {

    // the START_TIMER action set the
    // from_date and returns the new state
    case ActionTypes.START_TIMER:
        return Object.assign({}, state, {
            from_date: action.from_date
        });

    case ActionTypes.STOP_TIMER:
        // clean the form fields
        return Object.assign({}, initialTimerState);

    default:
        return state;
    }
}


/** Reducer for the entries list.
 */
const entries = (state = [], action) => {
    switch (action.type) {
    case ActionTypes.STOP_TIMER:
        return [
            {
                project: action.project,
                descriptio: action.description,
                billable: action.billable,
                from_date: action.from_date,
                to_date: action.to_date
            },
            ...state
        ];
    default:
        return state;
    }
}

const reaggleApp = combineReducers({
    timer,
    entries
});

export default reaggleApp;
