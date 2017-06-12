
export default {
  namespace: 'dashboard',
  state: {
  	show: false,
  },

  reducers: {
  	show(state){
  		return { ...state, show: true }
  	},
  },
  effects: {},
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/dashboard') {
          dispatch({
            type: 'load',
            show: true,
          })
        }
      })
    },
  },
};
