
export default {
  namespace: 'mainLayout',
  state: {
  	show: false,
    mode: 'vertical',
    collapsed: true,
    // selectedKey:['dashboard']
  },

  reducers: {
  	show(state){
  		return { ...state, show: true }
  	},
    modeSwitch(state,payload){
      // console.log(payload.collapsed+"。。。。。。。")
      // console.log(state.collapsed+"。。。。。。。")
      if(payload.collapsed){
        return {...state, mode: 'vertical', collapsed: !state.collapsed }
      }else{
        return {...state, mode: 'inline', collapsed: !state.collapsed }
      }
      
    },
    // selectedKeys(state,value){
    //   console.log(value)
    //   return { ...state, selectedKey: [value] }
    // },
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

