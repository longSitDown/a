import React, { Fragment } from 'react'
import './index.styl'

function handleClick(){
    console.log(this)
    this.history.push('/login')
}

let Header = (props) => {

    return (
        <Fragment>           
            <div className='container'>
                header
            </div>
        </Fragment>
    )
}

export default Header