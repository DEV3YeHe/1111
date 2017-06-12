import { login } from '../services/login'
import { routerRedux } from 'dva/router'
import { delay } from 'redux-saga'

export default {
  namespace: 'login',
  state: {
  	show: false,
    loginLoading: false,
  },

  reducers: {
  	load(state){
  		return { ...state, show: true }
  	},

    loadover(state){
      return { ...state, show: false }
    },
    
    showLoginLoading(state){
      return { ...state,loginLoading: true }
    },

    hideLoginLoading(state){
      return { ...state,loginLoading: false }
    },

  },

  effects: {
    *begin({payload: values}, { put, call }){

      
      yield put({ type: 'showLoginLoading' })

      
      const data = yield call(login, values)
      // console.log('数据到达了 模型login里')
      // console.log(values)
      
      

      // yield  setTimeout("console.log('345')","3000");

      // const jump = (data)=>{
        if (data) {
          yield call(delay, 400)
          yield put({ type: 'hideLoginLoading' })
          yield call(delay, 800)
          yield put({ type: 'loadover' })
          yield call(delay, 800)
          yield put(routerRedux.push('/dashboard'))
          
        } else {
          throw data
        }
      // }
      
    }
  },

  subscriptions: {
  	setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/login') {
          dispatch({
            type: 'load',
            show: true,
          })
        }
      })
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'load',
            show: true,
          })
        }
      })
    },
  },
};
