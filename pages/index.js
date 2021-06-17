import { useState, useEffect, useReducer } from 'react'
import styles from '../styles/Home.module.css'
import Select from 'react-select'
import data from '../data/data'
// const db = require('../data/sumDuuregS.json')

const SET_AIMAG_KHOT = 'setAimagKhot'
const SET_SUM_DUUREG = 'setSumDuureg'
const SET_BAG_KHOROO = 'setBagKhoroo'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AIMAG_KHOT:
      return {
        // ...state,
        aimagKhot: action.index,
        sumDuureg: null,
        bagKhoroo: null,
      }
    case SET_SUM_DUUREG:
      return { ...state, sumDuureg: action.index, bagKhoroo: null }
    case SET_BAG_KHOROO:
      return { ...state, bagKhoroo: action.index }
    default:
      return state
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    aimagKhot: null,
    sumDuureg: null,
    bagKhoroo: null,
  })

  const handleAimagKhotChange = (index) => {
    dispatch({ type: SET_AIMAG_KHOT, index })
  }
  const handleSumDuuregChange = (index) => {
    dispatch({ type: SET_SUM_DUUREG, index })
  }
  const handleBagKhorooChange = (index) => {
    dispatch({ type: SET_BAG_KHOROO, index })
  }

  return (
    <div className={styles.container}>
      <main>
        <h1>Even better local version</h1>

        <h1>Аймаг хот</h1>
        <Select
          instanceId='khotAimag'
          options={data.map((i, index) => ({ ...i, index }))}
          value={
            state.aimagKhot != null
              ? data.map((i, index) => ({ ...i, index }))[state.aimagKhot]
              : []
          }
          isSearchable
          placeholder='Аймаг/Хот сонгоно уу'
          onChange={(e) => handleAimagKhotChange(e.index)}
          // getOptionValue={(i) => i.index}
          // getOptionLabel={(i) => i.label}
        />
        <h1>Сум дүүрэг</h1>
        <Select
          instanceId='sum'
          options={
            state.aimagKhot != null
              ? data[state.aimagKhot].sumDuurguud.map((i, index) => ({
                  ...i,
                  index,
                }))
              : []
          }
          value={
            state.sumDuureg != null
              ? data[state.aimagKhot].sumDuurguud.map((i, index) => ({
                  ...i,
                  index,
                }))[state.sumDuureg]
              : []
          }
          isSearchable
          placeholder='Сум/Дүүрэг сонгоно уу'
          onChange={(e) => handleSumDuuregChange(e.index)}
          // getOptionValue={(i) => i.index}
        />
        <h1>Баг хороо</h1>
        <Select
          instanceId='3'
          options={
            state.sumDuureg != null
              ? data[state.aimagKhot].sumDuurguud[
                  state.sumDuureg
                ].bagKhorood.map((i, index) => ({ ...i, index }))
              : []
          }
          value={
            state.bagKhoroo != null
              ? data[state.aimagKhot].sumDuurguud[
                  state.sumDuureg
                ].bagKhorood.map((i, index) => ({ ...i, index }))[
                  state.bagKhoroo
                ]
              : []
          }
          isSearchable
          placeholder='Сум/Дүүрэг сонгоно уу'
          onChange={(e) => {
            handleBagKhorooChange(e.index)
          }}
          // getOptionValue={(i) => i.index}
        />
      </main>
    </div>
  )
}
