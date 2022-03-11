import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroVideo from '../components/Hero/HeroVideo'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <HeroVideo />
    </div>
  )
}