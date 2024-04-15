import React from 'react'
import images from "../assets/Group 2.png"
import image from "../assets/Group 6.png"
import NewTask from '../pages/NewTask'
import AllTask from '../pages/AllTask'
import "../styles/Navbar.css"
import { Link,useMatch } from 'react-router-dom'

const Navbar = () => {
  const isAbout = useMatch("/AllTask");
  const isNew = useMatch("/NewTask");
  return (
    <>
    <nav className='container p-3 my-1'>
      <div className='d-md-flex justify-content-between'>
      <Link className='' to="/">
      <img src={images} className='logo' alt="logo" /> 
      </Link>
      
      <div className='d-flex gap-5 align-items-center justify-content-md-center navfont'>
     
      <ul className='list-unstyled d-flex text-center gap-5 mt-3 '>
        <li>
          {!isNew && "AllTask" && (

          <Link className='' to="../NewTask" style={{ textDecoration: 'none', color:"black" }}>New Task</Link>
          )}
        </li>
        <li>
          {!isAbout && "/AllTask" && (
            
            <Link className='' to="./AllTask" style={{ textDecoration: 'none', color:"black" }}>All Tasks</Link>
          )}

        </li>
     
      </ul>
      <Link to="/EditTask">
      <img src={image} alt="profile" />
      </Link>

      </div>

      </div>

    </nav>
    <hr />
    </>
  )
}

export default Navbar