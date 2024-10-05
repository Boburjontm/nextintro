import React from 'react'
import Link from "next/link"
import Image from "next/image";
import Logo from "../img/logo.svg"
import Human from "../img/human.svg"
import Like from "../img/like.svg"
import Search from "../img/search.svg"
import Shop from "../img/shop.svg"

const Header = () => {
  return (
    <>
    <div className='container mx-auto  flex  gap-4  justify-between items-center px-4'>
      <Image src={Logo} alt="Logo" className='cursor-pointer'/>
     <div className="link_box flex p-8 gap-4 items-center">
       <Link className='font-semibold active:text-yellow-300' href={"/"}>Home</Link>
      <Link className='font-semibold   active:text-yellow-300' href={"/shop"}>Shop</Link>
      <Link className='font-semibold active:text-yellow-300' href={"/contact"}>Contact</Link>
      <Link className='font-semibold active:text-yellow-300' href={"/blog"}>Blog</Link>
     </div>
     <div className="emoji flex gap-4 p-6 items-center cursor-pointer">
     <Image src={Human} alt="Logo"/>
     <Image src={Search} alt="Logo"/>
     <Image src={Like} alt="Logo"/>
     <Image src={Shop} alt="Logo"/>

     </div>
    </div>
    </>
    
  )
}

export default Header
