import { useState, useEffect, useReducer } from 'react'
import styles from '../styles/Home.module.css'
import Select from 'react-select'
import data from '../data/data'
// const db = require('../data/sumDuuregS.json')

const SET_SUM_DUUREG_LIST = 'setSumDuuregList'
const SET_BAG_KHOROO_LIST = 'setBagKhorooList'
const SET_AIMAG_KHOT = 'setAimagKhot'
const SET_SUM_DUUREG = 'setSumDuureg'
const SET_BAG_KHOROO = 'setBagKhoroo'

const initialState = {
  sumDuuregList: [],
  bagKhorooList: [],
  aimagKhot: '',
  sumDuureg: '',
  bagKhoroo: '',
}

function reducer(state, action) {
  switch (action.type) {
    case SET_SUM_DUUREG_LIST:
      return {}
    case SET_BAG_KHOROO_LIST:
      return {}
    case SET_AIMAG_KHOT:
      return { aimagKhot: state.aimagKhot }
    case SET_SUM_DUUREG:
      return { sumDuureg: state.sumDuureg }
    case SET_BAG_KHOROO:
      return { bagKhoroo: state.bagKhoroo }
    default:
      return initialState
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className={styles.container}>
      <main>
        <h1>Even better local version</h1>

        <Select
          instanceId='1'
          options={data}
          value={state.aimagKhot}
          isSearchable
          placeholder='Аймаг/Хот сонгоно уу'
          // onChange={(e) => {
          //   dispatch({ type: SET_SUM_DUUREG_LIST })
          // }}
        />
      </main>
    </div>
  )
}
