import React from 'react'

const SelectSumDuureg = ({ idk, handleDuuregSumChange, sumDuureg }) => {
  return (
    <>
      <h1> Дүүрэг/Сум сонгоно уу:</h1>

      <select value={idk} onChange={handleDuuregSumChange}>
        {sumDuureg
          ? sumDuureg.map((duureg, index) => (
              <option value={duureg[i]} key={index}>
                {duureg.name}
              </option>
            ))
          : null}
      </select>
    </>
  )
}

export default SelectSumDuureg
