"use client"
import Image from "next/image";
import aim_close from "@/public/aim_close.webp"
import aim_open from "@/public/aim_open.webp"
import useSound from "use-sound";
import { useState } from "react";

export default function Home() {
  const [aim,setAim] = useState(false)
  const [count,setCount] = useState(1)
  const [play] = useSound("/pop.mp3")
  const downhandler = () =>{
    setAim(true)
    setCount(count+1)
    console.log("clicked");
    play()
  }
  const uphandler = () =>{
    setAim(false)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-full w-full" onMouseDown={()=>{downhandler()}} onMouseUp={()=>{uphandler()}}>
        <Image alt="open" src={aim_open} fill quality={100}/>
        <Image alt="close" hidden={aim} src={aim_close} fill quality={100}/>
      </div>
      <div className="absolute">
        <p className="text-white font-bold text-4xl">POP! {count}</p>
      </div>
    </main>
  );
}
