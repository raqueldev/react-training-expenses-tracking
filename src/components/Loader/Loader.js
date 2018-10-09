import React from 'react'

export default function Loader({ isLoading }) {
    return isLoading ? <div style=
        {{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, backgroundColor: 'blue' 
    }}></div> : null
}

