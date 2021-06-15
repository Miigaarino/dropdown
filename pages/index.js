import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import info from '../data/sumDuureg'
const db = require('../data/sumDuuregS.json')

const [hotAimag, sethotAimag] = useState('')

const data = (name) => {
  return db[name]
}

export default function Home() {
  return (
    <div className='main'>
      {console.log(db['Ulaanbaatar'].ner)}
      <select name='' id=''></select>
    </div>
  )
}
