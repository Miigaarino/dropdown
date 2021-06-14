import React from 'react'

const SelectBagKhoroo = ({ idk1, handleBagHorooChange, bagKhoroo }) => {
  return (
    <>
      <h1> Хороо/Баг сонгоно уу:</h1>

      <select value={idk1} onChange={handleBagHorooChange}>
        {bagKhoroo
          ? bagKhoroo.map((horoo) => (
              <option value={horoo.name} key={horoo.id}>
                {horoo.name}
              </option>
            ))
          : null}
      </select>
    </>
  )
}

export default SelectBagKhoroo
