import React, { Fragment} from 'react'
import './index.styl'

// class Login extends Component {
//     render() {
//         return (
//             <div className="P-home">
//                 <h1>login page</h1>
//             </div>
//         )
//     }
// }

function handleClick(){
    this.history.goBack()
}

let Login = (props) => {

    return (
        <Fragment>
            <h1>login page</h1>
            <button onClick={handleClick.bind(props)}>click</button>
        </Fragment>
    )
}

export default Login