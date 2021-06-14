import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import SelectSumDuureg from '../components/SelectSumDuureg'
import SelectBagKhoroo from '../components/SelectBagKhoroo'

export const options = {
  1: 'Улаанбаатар',
  2: 'Дорнод',
  3: 'Сүхбаатар',
  4: 'Хэнтий',
  5: 'Төв',
  6: 'Говьсүмбэр',
  7: 'Сэлэнгэ',
  8: 'Дорноговь',
  9: 'Дархан-Уул',
  10: 'Өмнөговь',
  11: 'Дундговь',
  12: 'Орхон',
  13: 'Өвөрхангай',
  14: 'Булган',
  15: 'Баянхонгор',
  16: 'Архангай',
  17: 'Хөвсгөл',
  18: 'Завхан',
  19: 'Говь-Алтай',
  20: 'Баян-Өлгий',
  21: 'Ховд',
  22: 'Увс',
}

export default function Home() {
  const [aimagHot, setAimagHot] = useState('')
  const [sumDuureg, setSumDuureg] = useState('')
  const [idk, setIdk] = useState('')
  const [idk1, setIdk1] = useState('')
  const [bagKhoroo, setBagKhoroo] = useState('')

  useEffect(() => {
    aimagHot &&
      fetch(`https://www.grapecity.mn/api/application/district/${aimagHot}`)
        .then((res) => res.json())
        .then((json) => setSumDuureg(json.payload))
        .catch((error) => {
          console.log(error.message)
        })
  }, [aimagHot])

  useEffect(() => {
    aimagHot &&
      idk &&
      fetch(`https://www.grapecity.mn/api/application/khoroo/${idk}`)
        .then((res) => res.json())
        .then((json) => setBagKhoroo(json.payload))
        .catch((error) => {
          console.log(error.message)
        })
  }, [aimagHot, idk])

  const handleAimagHotChange = (e) => {
    setAimagHot(e.target.value)
  }
  const handleDuuregSumChange = (e) => {
    setIdk(e.target.value)
  }
  const handleBagHorooChange = (e) => {
    setIdk1(e.target.value)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Хот/Аймаг сонгоно уу:</h1>
        <select value={aimagHot} onChange={handleAimagHotChange}>
          {Object.keys(options).map((key, index) => (
            <option key={index} value={key}>
              {options[key]}
            </option>
          ))}
        </select>

        <SelectSumDuureg
          idk={idk}
          handleDuuregSumChange={handleDuuregSumChange}
          sumDuureg={sumDuureg}
        />

        <SelectBagKhoroo
          idk1={idk1}
          handleBagHorooChange={handleBagHorooChange}
          bagKhoroo={bagKhoroo}
        />

        <h1>{aimagHot && options[aimagHot]}</h1>
        <h1>{idk && idk}</h1>
        <h1>{idk1 && idk1}</h1>
      </main>
    </div>
  )
}
