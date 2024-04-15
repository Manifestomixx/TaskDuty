import React from 'react'
import images from '../assets/Component 1.png';
import "../styles/Hero.css"


const Hero = () => {
  return (
    <>

<main className='container p-md-3 mt-3 mt-lg-5'>
      <div className='row justify-content-between gap-5'>

      <div className='my-md-4 col-lg-5 d-flex  gap-3 flex-column'>
    <h2 className='boldtext mt-5'>Manage your Tasks on <span>TaskDuty</span></h2>
    <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quibusdam quae voluptatem aut repudiandae, veritatis numquam itaque ea, earum obcaecati eveniet est dicta quo voluptatum hic excepturi laborum! Nobis quis voluptatem debitis nemo cumque itaque?</p>
    <button className="btn btnhero btn-lg">Go to My Tasks</button>

      </div>
      <div className='col-lg-5 mt-4'>
        <img src={images} alt="" />
      </div>

      </div>
    

    </main>
    </>
  )
}

export default Hero