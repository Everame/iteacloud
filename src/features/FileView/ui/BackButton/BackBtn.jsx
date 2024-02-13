import React from 'react'
import { AngleLeft } from '../../../../shared/imgs/assets'

export default function BackBtn({isShow, setIndex, back}) {
  return (
    <div data-testid="backBtn" className={`btnWrapper ${isShow ? "show" : ""}`} onClick={() => {setIndex(-2); back()}}>
        <img src={AngleLeft} alt="Back button" />
    </div>
  )
}
