import { fork } from 'redux-saga/effects';
import api from '../services/API';
import name from './nameSaga';

export default function* root() {
	yield fork(name(api).watcher);
};
