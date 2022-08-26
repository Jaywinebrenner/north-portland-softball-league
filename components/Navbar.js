import React from 'react';
import Modal from 'react-modal';
import { faXmark, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      height: '50vh'
    },
  };


const Navbar = ({navItems, showing, handleSetShowing, props}) => {
    console.log("props on Nav", props);
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    const clickNavItem = (index) => {
        handleSetShowing(index)
    }

    return (
        <div className="navbar">

            <img className='logo' src="/logo.png"/>
            {navItems.map((item, i) => {
              return (
                <h3 style={{ display: `${item.inlineStyle}` }} key={`nav links${i}`} onClick={()=> clickNavItem(i)} className={`${showing === item.id ? " active disabled" : ""}`}>{item.name}</h3>
                )
            })}

            <div onClick={openModal} className='gear-wrapper'>
                <FontAwesomeIcon icon={faTrophy} color="white" />
            </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className='modal-inside-wrapper'>
            <h2>Champs</h2>
            <img className='trophy' src="/trophy.png"/>
            <div className='winner'>
                { [...props[0].acf.past_winner].reverse().map((item) => {
                    return (
                    <p><strong>{item.year}</strong> {item.team}</p> 
                    )
                })}
                </div>

            <div onClick={closeModal} className='x-wrapper'>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
      </Modal>
        </div>
    )
}

export default Navbar


