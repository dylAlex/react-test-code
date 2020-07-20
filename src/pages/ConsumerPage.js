import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../context'

export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {themeCtx=><div className={themeCtx.themeColor}>
                       <UserContext.Consumer>
                           {user=><div>{user.name}</div>}
                       </UserContext.Consumer>
                    </div>}
                </ThemeContext.Consumer>
                
            </div>
        )
    }
}
