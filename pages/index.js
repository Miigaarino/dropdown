import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import info from '../data/sumDuureg'
const db = require('../data/sumDuuregS.json')

export default function Home() {
  const [hotAimag, sethotAimag] = useState('')
  const [duuregSum, setDuuregSum] = useState('')
  const [bagKhoroo, setBagKhoroo] = useState('')
  const [duuregSumList, setDuuregSumList] = useState('')
  const [bagKhorooList, setBagKhorooList] = useState('')

  const handleHotAimagChange = (e) => {
    sethotAimag(e.target.value)
  }
  const handleDuuregSumChange = (e) => {
    setDuuregSum(e.target.value)
  }
  const handleBagKhorooChange = (e) => {
    setBagKhoroo(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <select value={hotAimag} onChange={handleHotAimagChange}>
          <option value=''> </option>
          {Object.keys(db).map((key, index) => (
            <option key={index}>{key}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
