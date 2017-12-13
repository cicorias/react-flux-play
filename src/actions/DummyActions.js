import AppDispatcher from '../dispatcher/AppDispatcher';

function createDummy(dummy) {
    var action = {
        type: 'new_dummy',
        dummy: dummy
    };
    AppDispatcher.dispatch(action);
}
module.exports = {
    createDummy: createDummy
}; 