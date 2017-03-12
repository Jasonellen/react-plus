import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../redux/action/index'

class Index extends Component{
	render(){
		console.log(this.props)
		const{state,add,del} = this.props //这里在UI组件内部通过this.props拿到这个文件内部mapStateToProps中返回的state和mapDispatchToProps中返回的方法
		return(
			<div>
				<button onClick={del}>-</button>
				<span>{state.sum}</span>
				<button onClick={add}>+</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		state: state.IndexReducer //将state中IndexReducer返回的state给当前UI组件使用
	}
}

function mapDispatchToProps(dispatch){
	return{
		add: () => dispatch(action.add()), // 触发action.add()函数执行后返回的action对象
		del: () => dispatch(function(dispatch){  //因为使用了redux-thunk，所以这里可以dispatch可以传函数作为参数
			let confirm = prompt('确定要减掉么？')
			if(confirm) dispatch(action.del())
		})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Index) //导出容器组件