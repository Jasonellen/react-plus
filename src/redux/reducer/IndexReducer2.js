import * as type from '../actionType/index.js'
const initialState ={
	sum :0
}

export default function IndexReducer2(state = initialState, action={}){
	switch(action.type){
		case type.INDEX2_ADD:  //这里如果监听的是type.INDEX_ADD，那么就是和第一个按钮同步触发加1操作
			return{
				...state,
				sum: state.sum+1  //sum:state.sum+type.text 传参形式
			}
			break
		case type.INDEX2_DEL:
			return{
				...state,
				sum: state.sum-1 
			}
			break
		default:
			return state
	}
}