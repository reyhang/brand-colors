import React, { useState } from 'react'
import './sidebar.scss'
import Modal from 'react-modal'
import { GrClose } from "react-icons/gr";


export default function Sidebar() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }


    return (<>
        <aside className='sidebar'>
            <div className='logo'>               
             <a href='/'>Brand<b>Colors</b></a>
            </div>

            <div className='description'>
                The biggest collection of official brand color codes around.
                Curated by @brandcolors and friends. </div>
            <nav className="menu">
                <ul>
                    <li>
                        <button href='/' onClick={toggleModal}>About BrandColors</button>
                    </li>
                </ul>
            </nav>
        </aside>

        <Modal
            isOpen={modal}
            onRequestClose={toggleModal}
            className="modal"
            overlayClassName="modal-overlay"
            contentLabel="Example Modal"> <button className='modal-close-btn' onClick={toggleModal}><GrClose /></button>
            <h2> About BrandColors </h2>

            <p>
                BrandColors was created by
                <a href='https://www.designbombs.com/'>
                    <strong> DesignBombs</strong>
                </a>.
                The goal was to create a helpful reference for the brand color codes that are needed most often.
                <br /><br />
                It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+,
                and over <strong> 2 million pageviews </strong> .
                There are now over <strong>600 brands</strong>  with
                <strong> 1600 colors </strong> and the collection is always growing.
            </p>


        </Modal>
    </>
    )
}   


