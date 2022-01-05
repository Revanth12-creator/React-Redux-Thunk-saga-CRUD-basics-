import { all, call,delay,put,takeEvery} from 'redux-saga/effects';


function* increseCountValue(){
    yield delay(3000);
    yield put({type:'INCRESE_COUNT_SUCCESS'})
}
function* decreseCountValue(){
    yield delay(3000);
    yield put({type:'DECRESE_COUNT_SUCCESS'})
}
export function* watcher(){
    yield all([
        takeEvery('INCRESE_COUNT',increseCountValue),
        takeEvery('DECRESE_COUNT',decreseCountValue),
    ]) 
}
