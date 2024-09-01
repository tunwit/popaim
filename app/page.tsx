"use client"
import Image from "next/image";
import aim_close from "@/public/aim_close.webp"
import aim_open from "@/public/aim_open.webp"
import useSound from "use-sound";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [aim,setAim] = useState(false)
  const [count,setCount] = useState(1)
  const [play] = useSound("/pop.mp3")
  const downhandler = (e:SyntheticEvent) =>{
    setAim(true)
    setCount(count+1)
    play()
  }
  const uphandler = (e:SyntheticEvent) =>{
    e.preventDefault();
    setAim(false)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="fixed h-full w-full right-56 sm:right-0"   onTouchEnd={(e:SyntheticEvent)=>{uphandler(e)}}  onTouchStart={(e:SyntheticEvent)=>{downhandler(e)}} onMouseUp={(e:SyntheticEvent)=>{uphandler(e)}} onMouseDown={(e:SyntheticEvent)=>{downhandler(e)}}>
        <Image alt="open" placeholder="blur" className="min-w-[1500px]" src={aim_open} fill quality={100}/>
        <Image alt="close" placeholder="blur" className="min-w-[1500px]" hidden={aim} src={aim_close} fill quality={100}/>
      </div>
      <div className="absolute top-10">
        <p className="text-white font-bold text-4xl">POP! {count}</p>
      </div>
    </main>
  );
}