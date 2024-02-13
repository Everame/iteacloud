import React from 'react'
import "./styles/StorageSize.scss"

export default function StorageSize({size, maxSize}) {
    const mb = (size/1024).toFixed(3);
    const procent = mb / maxSize * 100;
  return (
    <div className="sizeWrapper">
        <div className="valuesRow">
            <div className="value">
                <h4>{mb}mb</h4>
            </div>
            <div className="value">
                <h4>{maxSize}mb</h4>
            </div>
        </div>
        <div className="progressBar">
            <div className="innerRow" style={{width: `${procent}%`}}></div>
        </div>
    </div>
  )
}
