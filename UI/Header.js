import React from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { useState } from 'react';

const Header = ({activePage}) => {

    const [menuOpen, setMenuOpen] = useState(false);


    const burgerHandler = () => {

        setMenuOpen(()=> !menuOpen)

    }

    const height = menuOpen ? 'h-[250px]' : 'h-0'

    const clickedStyle = menuOpen ? 'flex' : 'hidden'

    console.log(menuOpen)
    return (
        <div className=' h-20 w-full flex p-7 justify-center items-center'>
            <div className='flex justify-between w-full max-w-2xl '>
                <div className='flex'>
                    <Link href='/'>
             <Image src='/rbilogo.png' width='32' height='30' objectFit='contain' />
             </Link>
             </div>
            <Nav handleClick={burgerHandler} isOpen={menuOpen}/>
            </div>

            <div className={`flex-col md:hidden absolute top-20 bg-primary w-full p-0  z-20 transition-all duration-200  ${height}`}>
                   <MobileNav isOpen={menuOpen}/>
                </div>
        </div>
    );
};

export default Header;