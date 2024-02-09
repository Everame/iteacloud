import React from 'react'

export default function Action({icon, name, action, show}) {
  return (
    <div className={`actionBtn ${show ? "show" : ""}`} onClick={action}>
        <div className="iconBlock">
            <img src={icon} alt="Button icon" />
        </div>
        <div className="textBlock">
            <span className="title">{name}</span>
        </div>
    </div>
  )
}
