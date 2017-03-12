import * as type from '../actionType/index.js'
const initialState ={
	sum :0
}

export default function IndexReducer(state = initialState, action={}){
	switch(action.type){
		case type.INDEX_ADD:
			return{
				...state,
				sum: state.sum+1  //sum:state.sum+type.text 传参形式
			}
			break
		case type.INDEX_DEL:
			return{
				...state,
				sum: state.sum-1 
			}
			break
		default:
			return state
	}
}
