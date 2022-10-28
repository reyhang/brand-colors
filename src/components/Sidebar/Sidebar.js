import React, { Component } from 'react'
import './sidebar.scss'

export class Sidebar extends Component {
    render() {
        return (
            <aside className='sidebar'>
                <div className='logo'>
                    <a href='!#'>Brand<b>Colors</b></a>
                </div>

                <div className='description'>
                    The biggest collection of official brand color codes around.
                    Curated by @brandcolors and friends. </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href='!#'>About Brand Colors</a>
                        </li>
                    </ul>
                </nav>
            </aside>

        )
    }
}

export default Sidebar