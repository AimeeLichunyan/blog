import React, {Component} from 'react';
import myContainer from './wrapWithUsername';
let style = {
    padding: '10px',
    width: '80px',
    height: '10px',
    background:'#1890ff', 
    borderRadius:'30px',
    textAlign: 'center',
    color: '#fff',
    lineHeight: '10px',
    margin:'10px'
}
// import React, {Component} from 'react';
// import myContainer from './wrapWithUsername';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '我是Welcome'
        }
    }
    render() {
        return (
            <div>welcome </div>
        )
    }
}

const WelcomeHello =  myContainer(Welcome);

export default WelcomeHello;
// import React, {Component} from 'react'

// class Welcome extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: ''
//         }
//     }

//     componentWillMount() {
//         let username = localStorage.getItem('username');
//         this.setState({
//             username: username
//         })
//     }

//     render() {
//         return (
//             <div>welcome {this.state.username}</div>
//         )
//     }
// }

// export default Welcome;

// <div style={{margin: '10px'}}>
//                     <label id="username" style={{padding: '10px'}}>
//                     账户:
//                     </label>
//                     <input name="username" {...this.props.getField('username')}/>
//                </div>
//                 <div style={{margin: '10px'}}>
//                     <label id="password" style={{padding: '10px'}}>
//                     密码:
//                     </label>
//                     <input name="password" {...this.props.getField('password')}/>
//                 </div>
//                 <div onClick={this.props.handleSubmit} style={style}>提交</div>