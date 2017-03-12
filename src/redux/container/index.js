import React,{Component} from 'react'
import Index from '../../components/Index'
import Index2 from '../../components/Index2'

class IndexContainer extends Component{
	render(){
		return (
			<div>
				<Index/>
				<Index2/>
			</div>
		)
	}
} 

function mapStateToProps(state){
	
}
function mapDispatchToProps(dispatch){
	
}

export default IndexContainer //这里没有获取和触发redux的操作，所以可以直接返回UI组件就行了
