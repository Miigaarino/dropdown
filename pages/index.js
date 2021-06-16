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
      return {}
    case SET_SUM_DUUREG:
      return {}
    case SET_BAG_KHOROO:
      return {}
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
          isSearchable
          value={aimagKhot}
          placeholder='Аймаг/Хот сонгоно уу'
          onChange={(e) => {
            dispatch({ type: SET_SUM_DUUREG_LIST })
          }}
        />
        {console.log(aimagKhot)}
        <br />
        <Select
          instanceId='2'
          isSearchable
          placeholder='Сум/Дүүрэг сонгоно уу'
          onChange={(e) => {
            dispatch({ type: SET_BAG_KHOROO_LIST })
          }}
        />
        <br />
        <Select
          instanceId='3'
          isSearchable
          placeholder='Баг/Хороо сонгоно уу'
        />
      </main>
    </div>
  )
}
