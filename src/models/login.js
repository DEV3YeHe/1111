import { login } from '../services/login'
import { routerRedux } from 'dva/router'

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
      yield put({ type: 'hideLoginLoading' })
      yield put({ type: 'loadover' })

      // setTimeout("console.log('345')","3000");

      // const jump = (data)=>{
        if (data) {
          
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
