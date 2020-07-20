import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../kReactRedux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../kReactRedux.js'

@connect(
    // mapStateToProps
    ({home})=>({home}),
    // mapDispatchToProps Object|function
    {
        add: ()=>({
            type: "ADD"
        })
    },
    // dispatch=>{
    //     console.log(dispatch, 'dispatch===component')
    //     const add = ()=> dispatch({type:"ADD"})
    //     const minus = ()=> dispatch({type:"MINUS"})
    //     let creators = {
    //         add: ()=>({type: "ADD"}),
    //         minus: ()=>({type: "MINUS"})
    //     }
    //     creators = bindActionCreators(creators, dispatch)
    //     return {dispatch, ...creators}
    // },
    // mergeOptions
    (stateProps, dispatchToProps, ownProps)=>{
        return {...stateProps, ...dispatchToProps, ...ownProps, omg:'omg'}
    }
)
class ReactReduxPage extends Component {
    render() {
        const {home, add, minus} = this.props
        console.log('props', this.props);
        return (
            <div>
                <h1>ReactReduxPage</h1>
                <p>{home}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
}

export default ReactReduxPage
