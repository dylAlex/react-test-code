import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import { ThemeContext, UserContext } from '../context'
import UseContextPage from './UseContextPage'
import ConsumerPage from './ConsumerPage'

export default class ContextPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: {
                themeColor: 'red'
            },
            user: {
                name: 'duanyali-xiaolin'
            }
        }
    }
    changeColor=()=>{
        const { themeColor } = this.state.theme
        this.setState({
            theme: {
                themeColor:themeColor==='red'?'green':'red'
            }
        })
    }
    render() {
        const { theme, user } = this.state
        return (
            <div>
                <h3>ThemeContext</h3>
                <button onClick={this.changeColor}>一键换肤</button>
                <ThemeContext.Provider value={theme}>
                    <UserContext.Provider value={user}>
                        <ContextTypePage/>
                        <UseContextPage/>
                        <ConsumerPage/>
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        )
    }
}
