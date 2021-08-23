import React, { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ( props ) =>{

    const [state, setstate] = useState( 'initialState' )

    return (
        < Context.Provider value={ { state, setstate } } >
            { props.children }
        </Context.Provider>
    )
}

export default ContextProvider