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
		del: () => dispatch(action.delThunk) //使用thunk
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Index) //导出容器组件