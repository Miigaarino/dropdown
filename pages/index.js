import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Districts, Khoroo } from '../data/sumDuureg'

export default function Home() {
  const [aimagHot, setAimagHot] = useState('')
  const [sumDuuregList, setSumDuuregList] = useState({})
  const [bagKhorooList, setBagKhorooList] = useState({})
  const [sumDuureg, setSumDuureg] = useState('')
  const [bagKhoroo, setBagKhoroo] = useState('')

  useEffect(() => {
    aimagHot &&
      Object.keys(Districts).map((key) => {
        key === aimagHot ? setSumDuuregList(Districts[key]) : null
      })
  }, [aimagHot])

  useEffect(() => {
    aimagHot &&
      sumDuureg &&
      Object.keys(Khoroo).map((key) => {
        key === sumDuureg ? setBagKhorooList(Khoroo[key]) : null
      })
  }, [aimagHot, sumDuureg])

  const handleAimagHotChange = (e) => {
    setAimagHot(e.target.value)
  }
  const handleDuuregSumChange = (e) => {
    setSumDuureg(e.target.value)
  }
  const handleBagHorooChange = (e) => {
    setBagKhoroo(e.target.value)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Хот/Аймаг сонгоно уу:</h1>
        <select value={aimagHot} onChange={handleAimagHotChange}>
          {Object.keys(Districts).map((key, index) => (
            <option key={index} value={key}>
              {key}
            </option>
          ))}
        </select>

        <h1> Дүүрэг/Сум сонгоно уу:</h1>

        <select value={sumDuureg} onChange={handleDuuregSumChange}>
          {sumDuuregList
            ? Object.keys(sumDuuregList).map((key, index) => (
                <option key={index} value={sumDuuregList[key]}>
                  {sumDuuregList[key]}
                </option>
              ))
            : null}
        </select>

        <h1> Хороо/Баг сонгоно уу:</h1>

        <select value={bagKhoroo} onChange={handleBagHorooChange}>
          {bagKhorooList
            ? Object.keys(bagKhorooList).map((key, index) => (
                <option key={index} value={bagKhorooList[key]}>
                  {bagKhorooList[key]}
                </option>
              ))
            : null}
        </select>

        <h1>{aimagHot && aimagHot}</h1>
        <h1>{sumDuureg && sumDuureg}</h1>
        <h1>{bagKhoroo && bagKhoroo}</h1>
      </main>
    </div>
  )
}
