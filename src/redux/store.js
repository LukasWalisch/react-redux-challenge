/**
 * Created by lukas on 22.05.2016.
 */
import React from 'react'
import readData from '../data/fileReader'
import  logger  from 'redux-logger'
import  thunk from 'redux-thunk'
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'

var configureStore = function () {

    var initialState = {
        selectedOption: "",
        dataObjects: readData(),
    };

    const store = createStore(reducer, initialState, applyMiddleware(thunk, logger()));
    return store;
}

export default configureStore