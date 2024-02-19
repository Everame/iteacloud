import React from 'react'
import './styles/Header.scss'
import { CloudIcon } from '../../shared/imgs/assets'

export default function MainHeader() {
    return (
        <header>
            <img className="logo" src={CloudIcon} alt="cloud icon" />
            <h1>ITea Cloud</h1>
        </header>
    )
}
