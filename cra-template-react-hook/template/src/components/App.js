import React from 'react'
import ContextProvider from '../redux/store'

const App = () => {
    return (
        <ContextProvider >
            <div >{ 'Welcome' }</div>
        </ContextProvider >
    )
}

export default App