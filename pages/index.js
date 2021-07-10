import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../container/about'
import Help from '../container/help'

export default function Home() {
  const isAbout = true;
  if(isAbout) {
    return <About />
  } else {
    return <Help />
  }
}
