import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { faXmark, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Hamburger from 'hamburger-react'

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

  const customStylesMobile = {
    content: {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      // width: '100vw!important',
      // height: '100vh!important'
    },
  };


const Navbar = ({navItems, showing, handleSetShowing, props}) => {
    console.log("props on Nav", props);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const [isMobile, setMobile] = useState(null)

    const updateMobile = () => {
      window.innerWidth <= 800 ?
      setMobile(true) : setMobile(false);
      window.innerWidth <= 800 && setHamburgerIsOpen(false)
    }
    console.log("isMobile", isMobile)
    useEffect(() => {
      updateMobile();
      window.addEventListener("resize", updateMobile);
        return () => {
          window.removeEventListener("resize", updateMobile);
        }
    }, []);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    const clickNavItem = (index) => {
        handleSetShowing(index)
        setHamburgerIsOpen(false)
    }

    return (
        <div className="navbar">
           <Hamburger className="hamburger" toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
          <div className='desktop-icons'>
            {navItems.map((item, i) => {
              return (
                <h3 style={{ display: `${item.inlineStyle}` }} key={`nav links${i}`} onClick={()=> clickNavItem(i)} className={`${showing === item.id ? " active disabled" : ""}`}>{item.name}</h3>
                )
            })}
            </div>

            {hamburgerIsOpen && <div className='mobile-icons'>
              {navItems.map((item, i) => {
                return (
                  <h3 style={{ display: `${item.inlineStyle}` }} key={`nav links${i}`} onClick={()=> clickNavItem(i)} className={`${showing === item.id ? " active disabled" : ""}`}>{item.name}</h3>
                  )
              })}
            </div>}

            <div onClick={openModal} className='gear-wrapper'>
                <FontAwesomeIcon icon={faTrophy} color="white" />
            </div>
 

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={isMobile ? customStylesMobile : customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className='modal-inside-wrapper'>
            <h1>Champs</h1>
            <img className='trophy' src="/trophy.png"/>
            <div className='winner glow'>
                { [...props[0].acf.past_winner].reverse().map((item, i) => {
                    return (
                    <h5 key={`winner-key=${i}`}><strong>{item.year}</strong> {item.team}</h5> 
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


