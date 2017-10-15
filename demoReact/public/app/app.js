import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
//require('es6-promise').polyfill();

// import  Page from './components/containers/defaultPage'
// import  OrederPage from './components/containers/orderPage'
// Now we can attach the router to the 'root' element like this:

// class layoutxxx extends React.Component{
//     render(){
//         return (<h1>Shopping List for {this.props.name}</h1>);
//     }
// }

// class Layoutxxx extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>

//           </ul>
//         </div>
//       );
//     }
//   }

ReactDOM.render(Router, document.getElementById('root'));
//ReactDOM.render(<OrederPage/>, document.getElementById('root'));

