import React, {Component} from 'react';
import myContainer from './wrapWithUsername';
class Welcome extends Component {

    render() {
        return (
            <div>welcome {this.props.username}</div>
        )
    }
}

Welcome = myContainer(Welcome);

export default Welcome;
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