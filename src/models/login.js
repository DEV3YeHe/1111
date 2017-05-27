import { login } from '../services/login'
import { routerRedux } from 'dva/router'

export default {
  namespace: 'login',
  state: {
  	show: true,
    loginLoading: false,
  },

  reducers: {
  	load(state){
  		return { ...state, show: true }
  	},
    
    showLoginLoading(state){
      return { ...state,loginLoading: true }
    },

    hideLoginLoading(state){
      return { ...state,loginLoading: true }
    },
    
  },

  effects: {
    *begin({payload,}, { put, call }){
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      // yield put({ type: 'hideLoginLoading' })
      yield setTimeout("jump()","3000");

      const jump = ()=>{
        if (data) {
          put(routerRedux.push('/dashboard'))
        } else {
          throw data
        }
      }
      
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
