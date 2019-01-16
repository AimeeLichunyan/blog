// import React, {Component} from 'react'

// class Goodbye extends Component {
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
//             <div>goodbye {this.state.username}</div>
//         )
//     }
// }

// export default Goodbye;
import React, {Component} from 'react';
import myContainer from './wrapWithUsername';
import Welcome from './welcome'
// const WelComeYou = myContainer(Welcome)
class Goodbye extends Component {

    render() {
        return (
            <div>
            <div>Goodbye {this.props.username}</div>  
            <Welcome username="胡巴2" />
            </div>
        )
    }
}

Goodbye = myContainer(Goodbye);

export default Goodbye;