import React from 'react'

export default function Action({ icon, name, show, action, download }) {
    return (
        <a
            data-testid="action"
            className={`actionBtn ${show ? 'show' : ''}`}
            id={`${download ? 'download' : ''}`}
            onClick={action}
        >
            <div className="iconBlock">
                <img src={icon} alt="Button icon" />
            </div>
            <div className="textBlock">
                <span className="title">{name}</span>
            </div>
        </a>
    )
}
