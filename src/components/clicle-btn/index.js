import React, { Fragment, useEffect, useReducer, useRef, useState } from "react";
// import { useDrag } from 'react-dnd'
import "./index.styl";

let timer

let data = [
  {
    to: "编 辑",
    name: "菜 单",
    list: ["主页", "上传", "预览", "文件", "模板"],
  },
  {
    name: "编 辑",
    to: "菜 单",
    list: ["背景", "图片", "按钮", "视频", "文字"],
  },
];
let ClicleBtn = (props) => {
  let {bound} = props
  let [mouseStatus, setMouseStatus] = useState(0)

  //init
  useEffect(() => {
    window.onmouseup=(e) => {
      console.log('mouseup',mouseStatus)
      console.log('xx')
      
      setMouseStatus(0);
      if(mouseStatus>0){
        e.preventdefault()
        reducerStart(null)
        return false
      }
      
    }
  },[])

  //容器
  let wrapRef = useRef()
  // 按钮内容状态
  let [btnStatus, setBtnStatus] = useState(0)
  // 按钮显示状态
  let [btnHide, reducerBtnHide] = useReducer(function(prev,e){
    let {top,left,right,bottom,width,height} = props.bound
    let {top:eTop,left:eLeft,width: eWidth,height: eHeight} = e.target.getBoundingClientRect()
    let origin={
      x:eLeft+eWidth/2,
      y:eTop+eHeight/2
    }
    let x = origin.x-left
    let y = origin.y-top

    //靠在left
    if(x<width/2&&x<y){
      //
      return 'active-3'
    }
    //靠在top
    if(y<height/2&&x>=y){
      //
      return 'active-0'
    }
    //靠在right
    if(x>=width/2&&x<y){
      //
      return 'active-1'
    }
    //靠在left
    if(y>=height/2&&x>=y){
      //
      return 'active-2'
    }

    console.log(this,props,e,)
  },'')
  // 拖拽
  let [startBound,reducerStart] = useReducer((prev,next) => {
    console.log(prev,next,wrapRef)
    if(prev&&next){
      let {x,y} = prev
      let {x:nx,y:ny} = next
      console.log(wrapRef.current)
      let {offsetTop,offsetLeft,offsetHeight,offsetWidth}= wrapRef.current
      let top = (ny-y)+offsetTop
      let left = (nx-x)+offsetLeft
      top = top < 0?0:top>bound.height?bound.height:top
      wrapRef.current.style.top = top+'px'
      console.log(123,ny,y,offsetTop,wrapRef.current.style.top)
      wrapRef.current.style.left = left < 0?'0px':left>bound.width?bound.width+'px':left+'px'
    }
    return {...next}
  },null)

  let draging = (e) => {
    if(!mouseStatus){return}
    console.log(mouseStatus)
    let now = Date.now()
    // if(timer&&now-timer<1000){ return }
    timer = now
    let{clientX:x,clientY:y} = e
    reducerStart({x,y})
  }

  return (
    <Fragment>
      <div ref={wrapRef} className={"c-wrap "+btnHide} onMouseMove={draging}  onMouseDown={() => {setMouseStatus(1)}}>
        <div className="title" onClick={function(e){ !btnHide? reducerBtnHide(e): setBtnStatus(btnStatus?0:1)}}>{data[btnStatus].to}</div>
        <ul className="l-wrap">
          {data[btnStatus].list.map((val, index) => {
            return (
              <li key={index}>
                <span>{val}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default ClicleBtn;
