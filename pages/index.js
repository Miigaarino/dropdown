import { useState, useEffect, useReducer } from 'react'
import styles from '../styles/Home.module.css'
import Select from 'react-select'
import data from '../data/data'
// const db = require('../data/sumDuuregS.json')

const SET_SUM_DUUREG_LIST = 'setSumDuuregList'
const SET_BAG_KHOROO_LIST = 'setBagKhorooList'

const initialState = {
  sumDuuregList: [],
  bagKhorooList: [],
  data: { aimagKhot: '', sumDuureg: '', bagKhoroo: '' },
}

function reducer(state, action) {
  switch (action.type) {
    case SET_SUM_DUUREG_LIST:
      return {
        ...state,
        sumDuuregList: data.aimagKhotuud.find(
          (aimagKhot) => aimagKhot.value === action.aimagKhot
        ).sumDuurguud,
      }
    case SET_BAG_KHOROO_LIST:
      return {
        ...state,
        bagKhorooList: state.sumDuuregList.find(
          (sumDuureg) => sumDuureg.value === action.sumDuureg
        ).bagKhorood,
      }
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
          placeholder='Аймаг/Хот сонгоно уу'
          onChange={(e) => {
            dispatch({ type: SET_SUM_DUUREG_LIST, aimagKhot: e.value })
          }}
        />
        <br />
        <Select
          instanceId='2'
          isSearchable
          placeholder='Сум/Дүүрэг сонгоно уу'
          options={state.sumDuuregList}
          onChange={(e) => {
            dispatch({ type: SET_BAG_KHOROO_LIST, sumDuureg: e.value })
          }}
        />
        <br />
        <Select
          instanceId='3'
          isSearchable
          placeholder='Баг/Хороо сонгоно уу'
          options={state.bagKhorooList}
        />
      </main>
    </div>
  )
}
