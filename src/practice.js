// import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import './Box.css';
class Box extends Component {
  constructor(props){
    super(props);
    this.state= {
      color:props.color
    }

  }
  render() {
    return (
          <div className="box" style={{ backgroundColor :this.state.color }}>
      <button onClick ={()=>{
      const ncolor=newcolorgenerator();
      const nstate = Object.assign ({},this.state, {color : ncolor})
      this.setState (nstate)
      // this.setState ( { color : ncolor})
      }}> Click</button>
          </div>)
  }
   

}

// function Box( props ) {
//   return (
//     <div className="box" style={{ backgroundColor :props.color }}>
// <button>Click</button>
//     </div>
//   )
// }

function newcolorgenerator (){
  return Array(6).fill(0).reduce (
    (p,c,i)=>( p+ hexavalue[Math.floor(Math.random() * hexavalue.length)]),'#'
   );
}
const hexavalue = '0123456789ABCDEF'

const bcolors = Array(8).fill(0).map(newcolorgenerator);

function App() {
  return (
    <div>
    {bcolors.map (c=> <Box key={Math.random()} color={c}></Box>)}
     </div>
    
  );
  
}

export default App;




// // import logo from './logo.svg';
// import './App.css';
// import './Box.css';

// function Box( props ) {
//   return (
//     <div className="box" style={{ backgroundColor :props.color }}>
// <button>Click</button>
//     </div>
//   )
// }

// const hexavalue = '0123456789ABCDEF'

// const bcolors = Array(8).fill(0).map(()=>{
// return Array(6).fill(0).reduce (
//  (p,c,i)=>( p+ hexavalue[Math.floor(Math.random() * hexavalue.length)]),'#'
// );
// });

// function App() {
//   return bcolors.map (c=> <Box key={Math.random()} color={c}></Box>)
// }

// export default App;
