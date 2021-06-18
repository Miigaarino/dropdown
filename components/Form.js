import React, { useReducer, useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import data from '../data/data'
import DialogAfter from './Dialog'

const SET_AIMAG_KHOT = 'setAimagKhot'
const SET_SUM_DUUREG = 'setSumDuureg'
const SET_BAG_KHOROO = 'setBagKhoroo'
const SET_FIRST_NAME = 'setFirstName'
const SET_LAST_NAME = 'setLastName'
const SET_ID_NUMBER = 'setIdNumber'
const SET_BIRTHDAY = 'setBirthday'
const SET_ADDRESS_DETAILS = 'setAddressDetails'
const SET_EMAIL = 'setEmail'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AIMAG_KHOT:
      return {
        ...state,
        aimagKhot: action.index,
        sumDuureg: null,
        bagKhoroo: null,
      }
    case SET_SUM_DUUREG:
      return { ...state, sumDuureg: action.index, bagKhoroo: null }
    case SET_BAG_KHOROO:
      return { ...state, bagKhoroo: action.index }
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload }
    case SET_ID_NUMBER:
      return { ...state, idNumber: action.payload }
    case SET_BIRTHDAY:
      return { ...state, birthday: action.payload }
    case SET_ADDRESS_DETAILS:
      return { ...state, addressDetails: action.payload }
    case SET_EMAIL:
      return { ...state, email: action.payload }

    default:
      return state
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, {
    aimagKhot: null,
    sumDuureg: null,
    bagKhoroo: null,
    firstName: null,
    lastName: null,
    idNumber: null,
    birthday: null,
    addressDetails: null,
    email: null,
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
  const handleFirstNameChange = useCallback(
    (e) => {
      dispatch({ type: SET_FIRST_NAME, payload: e.target.value })
    },
    [dispatch]
  )
  const handleLastNameChange = (e) => {
    dispatch({ type: SET_LAST_NAME, payload: e.target.value })
  }
  const handleIdNumberChange = (e) => {
    dispatch({ type: SET_ID_NUMBER, payload: e.target.value })
  }
  const handleBirthDayChange = (e) => {
    dispatch({ type: SET_BIRTHDAY, payload: e.target.value })
  }
  const handleAddressDetailsChange = (e) => {
    dispatch({ type: SET_ADDRESS_DETAILS, payload: e.target.value })
  }
  const handleEmailChange = (e) => {
    dispatch({ type: SET_EMAIL, payload: e.target.value })
  }
  console.log('1')
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Анкет
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id='firstName'
            name='firstName'
            label='Өөрийн нэр'
            fullWidth
            onChange={handleFirstNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='lastName'
            name='lastName'
            label='Эцэг(эхийн) нэр'
            fullWidth
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id='IDnumber'
            name='IDnumber'
            label='Регистрийн дугаар'
            fullWidth
            onChange={handleIdNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id='date'
            label='Төрсөн өдөр'
            type='date'
            defaultValue='1970-01-01'
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleBirthDayChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id='addressDetails'
            name='addressDetails'
            label='Дэлгэрэнгүй хаяг'
            fullWidth
            onChange={handleAddressDetailsChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id='email'
            name='email'
            label='И-мейл хаяг'
            fullWidth
            onChange={handleEmailChange}
          />
        </Grid>
      </Grid>
      <br></br>

      <DialogAfter state={state} />

      <p>{state.firstName != null ? state.firstName : null}</p>
      <p>{state.lastName != null ? state.lastName : null}</p>
      <p>{state.idNumber != null ? state.idNumber : null}</p>
      <p>{state.birthday != null ? state.birthday : null}</p>
      <p>{state.addressDetails != null ? state.addressDetails : null}</p>
      <p>{state.email != null ? state.email : null}</p>

      <p>{state.aimagKhot != null ? data[state.aimagKhot].label : null}</p>
      <p>
        {state.sumDuureg != null
          ? data[state.aimagKhot].sumDuurguud[state.sumDuureg].label
          : null}
      </p>
      <p>
        {state.bagKhoroo != null
          ? data[state.aimagKhot].sumDuurguud[state.sumDuureg].bagKhorood[
              state.bagKhoroo
            ].label
          : null}
      </p>
    </React.Fragment>
  )
}
