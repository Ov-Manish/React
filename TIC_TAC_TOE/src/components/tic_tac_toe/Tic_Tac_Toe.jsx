import React, { useRef, useState } from 'react'
import '../../index.css'

// Importing assets 

import circle from '../assets/oShape.png'
import cross from '../assets/xShape.png'

let data = ["","","","","","","","",""]; //act as storage for our tic tac toe game
const Tic_Tac_Toe = () => {

    let [count,setCount] = useState(0);
    let [Done,setDone] = useState(false);
    const tittleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let allBoxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e,num)=>{
        if (Done) {
            return 0;
        }

        if (count % 2 ===0) {
            e.target.innerHTML = `<img src="${cross}" />`
            data[num]="x";
            setCount(++count);
        }else{
            e.target.innerHTML = `<img src="${circle}" />`
            data[num]="o";
            setCount(++count);
        }
        winnerCheck()
    }

    const winnerCheck = ()=>{
        if (data[0] === data[1] && data[1] === data[2] && data[2] !=="") {
            youWon(data[2])
        }else if (data[3] === data[4] && data[4] === data[5] && data[5] !=="") {
            youWon(data[5])
        }else if (data[6] === data[7] && data[7] === data[8] && data[8] !=="") {
            youWon(data[8])
        }else if (data[0] === data[3] && data[3] === data[6] && data[6] !=="") {
            youWon(data[6])
        }else if (data[1] === data[4] && data[4] === data[7] && data[7] !=="") {
            youWon(data[7])
        }else if (data[2] === data[5] && data[5] === data[8] && data[8] !=="") {
            youWon(data[8])
        }else if (data[0] === data[4] && data[4] === data[8] && data[8] !=="") {
            youWon(data[8])
        }else if (data[0] === data[1] && data[1] === data[2] && data[2] !=="") {
            youWon(data[2])
        }else if (data[2] === data[4] && data[4] === data[6] && data[6] !=="") {
            youWon(data[6])
        }
    }

    const youWon = (winner)=>{
    setDone(true);
    if (winner === "x") {
        tittleRef.current.innerHTML = `Congrats : <img src="${cross}" class=" max-w-20 max-h-20" /> you Won`
    }else{
        tittleRef.current.innerHTML = `Congrats : <img src="${circle}" class="flex justify-center items-center  max-w-20 max-h-20" /> you Won`
    }
    }

    const handleReset = ()=>{
        setDone(false)
        data = ["","","","","","","","",""];
        tittleRef.current.innerHTML = "TIC TAC TOE GAME"
        allBoxes.map((e)=>{
            e.current.innerHTML = "";
        })
    }
  return (
    <>
    <div className='container text-center'>
        <h1 className="mt-12 text-white text-6xl flex justify-center items-center" ref={tittleRef}>TIC TAC TOE GAME </h1>
        <div className="board gap-1">
            {/* ROw 1 */}
            <div className="flex items-center justify-center mt-20 gap-1">
                <div className="flex h-30 w-30 border-4 border-purple-400 rounded-2xl cursor-pointer" ref={box1} onClick={(e)=>{toggle(e,0)}} ></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="flex items-center justify-center gap-1 py-1.5">
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="flex items-center justify-center mb-20 gap-1">
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="flex h-30 w-30 border-4  border-purple-400 rounded-2xl cursor-pointer" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
           

        </div>
        <button className="w-40 h-15 border-none outline-none cursor-pointer text-black text-2xl font-medium bg-purple-500 rounded-[10px] mt-4 mb-12" onClick={()=>{handleReset()}}>Reset</button>
        
    </div>
    </>
  )
}

export default Tic_Tac_Toe