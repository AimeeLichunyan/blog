import React from 'react';
import ReactDOM from 'react-dom'
import Welcome from './compontents/home/Welcome';
import Goodbye from './compontents/home/goodbye'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      componentDidMount() {
        //   var a = 10
            // function test() {
            //     var a
            //     console.log(a);
            //     a = 20;
            // }
            // test();
            // console.log(a)
            window.localStorage.setItem('username','胡巴')
    }
      render() {
        return (
            <div>
              < Welcome />
              <Goodbye />
            </div>
        )
    }
}
ReactDOM.render(
    <App />, document.getElementById('root')
)