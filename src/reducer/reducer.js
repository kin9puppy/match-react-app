export default function reducer(state={filter: {}}, action) { 
    switch(action.type){
        case 'SET_FILTER':
            const newValue = {
                prevOptions: state.filter.options,
                ...action.value
            }
            return { filter: newValue };
        default:
            return state;
    }
}