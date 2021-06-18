import React, { useReducer } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import Button from '@material-ui/core/Button'
import data from '../data/data'
import { useForm, Controller } from 'react-hook-form'

export default function Form() {
  const { register, handleSubmit, control } = useForm()

  const idkThisShit = (data) => {
    console.log(data)
  }
  const aimagKhot = React.useMemo(
    () => data.map((i, index) => ({ ...i, index })),
    []
  )
  // const sumDuureg = React.useMemo(
  //   () =>
  //     state.aimagKhot != null
  //       ? aimagKhot[state.aimagKhot].sumDuurguud.map((i, index) => ({
  //           ...i,
  //           index,
  //         }))
  //       : [],
  //   [aimagKhot, state.aimagKhot]
  // )
  // const bagKhoroo = React.useMemo(
  //   () =>
  //     state.sumDuureg != null
  //       ? sumDuureg[state.sumDuureg].bagKhorood.map((i, index) => ({
  //           ...i,
  //           index,
  //         }))
  //       : [],
  //   [aimagKhot, state.aimagKhot, state.sumDuureg, sumDuureg]
  // )

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Анкет
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label='Өөрийн нэр' fullWidth {...register('firstName')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Эцэг(эхийн) нэр'
            fullWidth
            {...register('lastName')}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            label='Регистрийн дугаар'
            fullWidth
            {...register('idNumber')}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            label='Төрсөн өдөр'
            type='date'
            defaultValue='2000-01-01'
            InputLabelProps={{
              shrink: true,
            }}
            {...register('birthday')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name='aimagKhot'
            render={({ field }) => (
              <Select
                {...field}
                instanceId='khotAimag'
                options={aimagKhot}
                placeholder='Аймаг/Хот сонгоно уу'
              />
            )}
            control={control}
            defaultValue={[]}
          />
          {/* <Select
            instanceId='khotAimag'
            options={aimagKhot}
            value={state.aimagKhot != null ? aimagKhot[state.aimagKhot] : []}
            isSearchable
            placeholder='Аймаг/Хот сонгоно уу'
            onChange={(e) => handleAimagKhotChange(e.index)}
          /> */}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Select
            instanceId='sumDuureg'
            options={sumDuureg}
            defaultValue=''
            value={state.sumDuureg != null ? sumDuureg[state.sumDuureg] : []}
            isSearchable
            placeholder='Сум/Дүүрэг сонгоно уу'
            onChange={(e) => handleSumDuuregChange(e.index)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            instanceId='bagKhoroo'
            options={bagKhoroo}
            value={state.sumDuureg != null ? bagKhoroo[state.bagKhoroo] : []}
            isSearchable
            placeholder='Баг/Хороо сонгоно уу'
            onChange={(e) => {
              handleBagKhorooChange(e.index)
            }}
          />
        </Grid> */}
        <Grid item xs={12} sm={7}>
          <TextField
            label='Дэлгэрэнгүй хаяг'
            fullWidth
            {...register('addressDetails')}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField label='И-мейл хаяг' fullWidth {...register('email')} />
        </Grid>
      </Grid>
      <br></br>

      <Button
        variant='contained'
        styles={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={handleSubmit(idkThisShit)}
      >
        Илгээх
      </Button>
    </React.Fragment>
  )
}
