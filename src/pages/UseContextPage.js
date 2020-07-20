import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../context'

export default function UseContextPage(props) {
    const context = useContext(ThemeContext);
    const context2 = useContext(UserContext);
    return ( 
        <div className="border">
            <h3 className={context.themeColor}>UseContextPage</h3>
            <p>myname is {context2.name}</p>
        </div>
    )
}
