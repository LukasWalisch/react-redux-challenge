/**
 * Created by lukas on 21.05.2016.
 */
 var actions = {
    changeSelectValue: function(selectedOption) {
        return {
            type: 'CHANGE_SELECTED_VALUE',
            selectedOption: selectedOption
        }
    }
};

export default actions