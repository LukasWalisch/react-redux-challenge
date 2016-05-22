/**
 * Created by lukas on 21.05.2016.
 */
 var actions = {
    changeSelectValue: function(selectedOption) {
        return {
            type: 'CHANGE_SELECTED_VALUE',
            selectedOption: selectedOption
        }
    },
    
    //nur zum experimentieren
    changeSelectValueAsync: function (selectedOption) {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(actions.changeSelectValue(selectedOption));
            },2000);
        }

    }
};

export default actions