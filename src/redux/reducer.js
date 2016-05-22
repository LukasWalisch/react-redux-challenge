/**
 * Created by lukas on 21.05.2016.
 */
export default function reducer(state, action){
    switch (action.type) {
        case 'CHANGE_SELECTED_VALUE':
            return Object.assign({}, state, {selectedOption: action.selectedOption});
        default:
            return state;
    }
}