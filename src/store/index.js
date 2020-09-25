import { createStore, combineReducers } from 'redux'; // Redux에서 Store를 만들고 reducer를 합치는 함수를 불러오고
import reducers from '../reducers'; // reducers 라는 이름으로 reducers 폴더 안에 있는 리듀서들을 가져옵니다
 // reducers 의 모든 리듀서를 합치고
 
export default createStore(reducers) // 그 리듀서들을 가지고 스토어를 생성합니다.