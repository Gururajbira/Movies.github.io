const initialState = 30;

const updateCount = (state = initialState, action) => {

    if (action.type === 'increment') {

        return state =  state + 1;
    }
    else if (action.type === 'decrement') {

        return state =  state - 1;
    }

    else if (action.type === 'reset'){

        return state = 0;
    }

    else {
        return state;
    }

}
export default updateCount;
