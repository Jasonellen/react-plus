import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../redux/action/index'

class Index2 extends Component{
    render(){
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
        state: state.IndexReducer2
    }
}
function mapDispatchToProps(dispatch){
    return{
        add: () => dispatch(action.add2()), // 触发action.add()函数执行后返回的action对象
        del: () => dispatch(function(dispatch){
            let confirm = prompt('确定要减掉么？')
            if(confirm) dispatch(action.del2())
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index2) //导出容器组件