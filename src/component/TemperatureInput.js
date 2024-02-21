import React from 'react'

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
  }

  return (
    <div>
      <fieldset>
        <legend>Enter Temperature in {scaleName[scale]} : </legend>
        <input
          type='text'
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  )
}
