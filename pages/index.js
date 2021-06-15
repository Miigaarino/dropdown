import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import info from '../data/sumDuureg'
const db = require('../data/sumDuuregS.json')

const data = (name) => {
  return db[name]
}

export default function Home() {
  const [hotAimag, sethotAimag] = useState('')

  return (
    <div className='main'>
      <select>
        {Object.keys(db).map((key) => (
          <option>{key}</option>
        ))}
      </select>
    </div>
  )
}
