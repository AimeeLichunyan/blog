import React, {Component} from 'react'
// function getDisplayName(component) {
//     return component.displayName || component.name || 'Component';
//   }
const myContainer = (WrappedComponent) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
        }
        componentWillMount() {
            let username = localStorage.getItem('username');
            this.setState({
                username: username
            })
        }
        render() {
            return <WrappedComponent username={this.state.username}/>
        }
    }

    return NewComponent
}
export default myContainer