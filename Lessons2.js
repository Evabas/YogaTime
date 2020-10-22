import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'; 
import '../App.css';
import YogaDoux from "./YogaDoux.js";
import YogaDyn from "./YogaDyn.js";




class Hide extends React.Component{

  constructor(){
      super();
      this.state={
          show:true
      }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            
              <Button className="groupe mr-5 mt-2 mb-3 px-5" variant="secondary" active onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Découvrir le Yoga Dynamique' : 'Yoga dynamique'}</Button>
                {
                     this.state.show? null : <div><YogaDyn/></div>
                }
                            
              <Button className="groupe mr-5 mt-2 mb-3 px-5" variant="secondary" active onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Yoga Doux': 'Découvrir le Yoga doux'}</Button>
                  {
                      this.state.show? <div><br></br><YogaDoux/></div> : null
                  }
     
             
          </div>
        </header>
      </div>
    );
  }
}


export default Hide;

//---------------------------------------------------------------------------------

{/* <header className="App-header">
<div>
<Button className="mr-5 mt-2 mb-3 px-5" variant="secondary" onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? ' Découvrir le Yoga Dynamique' : 'Découvrir le Yoga doux'}</Button>
    {
        this.state.show? <div><YogaDoux/></div> : <div><YogaDyn/></div>
    }
    
</div>
</header> */}
// ------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {Button, ButtonGroup} from 'react-bootstrap'; 
 
// const ShowAndHide  = () => {
//   const yogas = ["yoga doux", "yoga dynamique"];
//   const [myYoga, setMyYoga] = React.useState(false);
//   const onClick = () => setMyYoga(true)
  
//   return (
//     <div className="row w-100">
//        <div className="col mb-3 col-12 text-center">

//           <div
//             className="btn-group"
//             role="group"
//             aria-label="Basic example"
//           >
//               {yogas.map(yoga => (
//                 <button
//                   type={"button"}
//                   key={yoga}
//                   className={"btn btn-light border-dark"}
//                   onClick={()=> setMyYoga(yoga)}
//                   >
//                     {yoga.toLocaleUpperCase}
//                   </button>
//               ))}
//           </div>

//         </div>
//     </div>
//   )
// }

// {/* <div className="col text-center">
//   <p>{myYoga}</p>
// </div> */}

// export default ShowAndHide;
// import React, { Component } from "react";
// import { render } from "react-dom";
// import Demo1 from "./yogaDoux.js";
// import Demo2 from "./YogaDyn.js";

// class Hide extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//       showHideDemo1: false,
//       showHideDemo2: false
//       };
//     this.hideComponent = this.hideComponent.bind(this);
//   }

//   hideComponent(name) {
//     console.log(name);
//     switch (name) {
//       case "showHideDemo1":
//         this.setState({ showHideDemo1: !this.state.showHideDemo1 });
//         break;
//       case "showHideDemo2":
//         this.setState({ showHideDemo2: !this.state.showHideDemo2 });
//         break;
//       default:
//         null;
//     }
//   }

//   render() {
//     const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
//     return (
//       <div>
//         {showHideDemo1 && <Demo1 />}
//         <hr />
//         {showHideDemo2 && <Demo2 />}
//         <hr />
//         <div>
//           <button onClick={() => this.hideComponent("showHideDemo1")}>
//             Click to hide Demo1 component
//           </button>
//           <button onClick={() => this.hideComponent("showHideDemo2")}>
//             Click to hide Demo2 component
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// render(<Hide/>, document.getElementById("root"));
// export default Hide;