import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
const db = require('../data/sumDuuregS.json')

export default function Home() {
  const [hotAimag, sethotAimag] = useState('')
  const [duuregSum, setDuuregSum] = useState('')
  const [bagKhoroo, setBagKhoroo] = useState('')
  const [duuregSumList, setDuuregSumList] = useState('')
  const [bagKhorooList, setBagKhorooList] = useState('')

  useEffect(() => {
    hotAimag &&
      Object.keys(db).map((key) => {
        key === hotAimag ? setDuuregSumList(db[key].sumDuurguud) : null
      })
  }, [hotAimag])

  useEffect(() => {
    hotAimag &&
      duuregSum &&
      Object.keys(duuregSumList).map((key) => {
        key === duuregSum ? setBagKhorooList(duuregSumList[key]) : null
      })
    console.log(bagKhorooList)
  }, [hotAimag, duuregSum])

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
      <main className={styles.main}>
        <select value={hotAimag} onChange={handleHotAimagChange}>
          <option value=''> </option>
          {Object.keys(db).map((key, index) => (
            <option key={index}>{key}</option>
          ))}
        </select>
        <br></br>
        <select value={duuregSum} onChange={handleDuuregSumChange}>
          <option value=''> </option>
          {Object.keys(duuregSumList).map((key, index) => (
            <option key={index}>{key}</option>
          ))}
        </select>
        <br></br>
        <select value={bagKhoroo} onChange={handleBagKhorooChange}>
          <option value=''> </option>
          {Object.keys(bagKhorooList).map((key, index) => (
            <option key={index}>{bagKhorooList[key].name}</option>
          ))}
        </select>

        <h1>{hotAimag && hotAimag}</h1>
        <h1>{duuregSum && duuregSum}</h1>
        <h1>{bagKhoroo && bagKhoroo}</h1>
      </main>
    </div>
  )
}
