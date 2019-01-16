// import React, {Component} from 'react'

// const myContainer =   (WrappedComponent,name) => 
//     class  extends WrappedComponent {

//         render() {
//             // console.log(this.state, 'state');
//             console.log(name,'name')
//             const elementsTree = super.render()
//             let newProps = {};
//             console.log(elementsTree)
//             if(elementsTree && elementsTree.type === 'input') {
//                 newProps = {value: 'welcome home'}
//             }
//             const props = Object.assign({}, elementsTree.props,newProps);
//             const newElementsTree = React.cloneElement(elementsTree,props,elementsTree.props.children);
//             return newElementsTree
//             // return (
//             //     <div>
//             //       <p>props</p> <pre>{JSON.stringify(this.props,null,2)}</pre>
//             //       <p>state</p> <pre>{JSON.stringify(this.state,)}</pre>
//             //       {super.render()}
//             //     </div>
//             // )
           

//         }
//     }
    

// export default myContainer

import React, {Component} from 'react'
function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
  }
const myContainer =  (WrappedComponent) => 
   class  extends WrappedComponent {
    componentDidMount() {
        
        console.log(this.state,'state')
    }
        render() {
            
            return super.render()
         
        }
    }

export default myContainer