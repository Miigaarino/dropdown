import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { info } from '../data/sumDuureg'

export default function Home() {
  return (
    <>
      {Object.keys(info).map((hot, index) => (
        <h1 key={index}>{info(hot)}</h1>
      ))}
    </>
  )
}
