import AppDispatcher  from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign'
// import { debug } from 'util';


var dummy = null;

function setDummy(newDummy) {
    dummy = newDummy;
}

function emitChange() {
    DummyStore.emit('change');
}

var DummyStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getDummy: function () {
        return dummy;
    }
});

function handleAction(action) {
    if (action.type === 'create_dummy') {
        setDummy(action.dummy);
        emitChange();
    }
}

DummyStore.dispatchToken = AppDispatcher.register(handleAction);

export default DummyStore