import * as type from '../actionType/index'


//第一个加减antion
export function add(text){
	return {
		type: type.INDEX_ADD,
		text
	}
}



export function del(text){
	return {
		type: type.INDEX_DEL,
		text
	}
} 
//使用thunk
export function delThunk(dispatch,getState){
	console.log(getState())  
	let confirm = prompt('确定要减掉么？')
	if(confirm) dispatch(del())
}


//第二个加减antion
export function add2(text){
	return {
		type: type.INDEX2_ADD,
		text
	}
}

export function del2(text){
	return {
		type: type.INDEX2_DEL,
		text
	}
}