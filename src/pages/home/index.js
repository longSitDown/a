import React, { Fragment, useEffect, useReducer, useRef, useState } from "react";
import Header from "../../components/header";
import ClicleBtn from "../../components/clicle-btn";
// import { DndProvider, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.styl";

function handleClick() {
  console.log(this);
  this.history.push("/login");
}

// let Wrap = () => {
//   // let [, drop] = useDrop({
//   //   accept: "app",
//   // });
//   return;
// };

let Home = (props) => {

  let wrapRef = useRef()
  let [bound,setBound] = useState(0)
  // let [b,cb] = useReducer((data,action) => {
  //   console.log(data)
  //   return action
  // },0)

  useEffect(() => {
    let {offsetTop:top,offsetLeft:left,offsetHeight:height,offsetWidth:width}=wrapRef.current
    setBound({top,left,width,height})
    console.log(wrapRef,1,wrapRef.current.getBoundingClientRect().top,wrapRef.current.offsetTop)
  },[])

  return (
    <Fragment>
      <div className="home-page">
        <Header />
        {/* <button onClick={()=> ca(a+1)}>{a}</button> */}
        {/* <button onClick={()=> cb(b+1)}>{b}</button> */}
        {/* <div className="center"> */}
        <div className="preview"></div>
        <div className="center-wrap" ref={wrapRef}>
          <ClicleBtn bound={bound} />
        </div>
        {/* <DndProvider backend={HTML5Backend}>
          <div>

          <Wrap />
          </div>
        </DndProvider> */}
        {/* </div> */}
      </div>
      {/* <button onClick={handleClick.bind(props)}>click</button> */}
    </Fragment>
  );
};

export default Home;
