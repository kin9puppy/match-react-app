export default function reducer(state={count: 0}, action) {
    let count = state.count;
    switch(action.type){
        case 'click':
            return {count: count+1};
        default:
            return state;
    }
}