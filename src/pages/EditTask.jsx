import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import "../styles/AllTasks.css"
import "../styles/EditTask.css"
import { HiChevronDown } from "react-icons/hi";

const EditTask = () => {
  return (
    <>
     <main className='container'>
      <h1 className='my-5'><IoIosArrowBack />Edit Task</h1>

      <form>

      <div>
        <div  className='d-flex flex-column gap-3'>
          <div className=''>
          <label htmlFor="" className='textform'>Task Title</label>
          <input type="text" required placeholder='Project Completion' />
          </div>
          <div className=''>
          <label htmlFor="" className='textform '>Description</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam. ' className='bordersize1'></textarea>
          {/* <input type="text" required placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam. ' className='bordersize ' /> */}
          </div>
          <div className=''>
          <label htmlFor="" className='textform '>Tags</label>
          <input type="text" required placeholder='Urgent Important '  className='pt-3 box' />
          
          <h2 className='downicon1 d-md-flex justify-content-md-end align-items-center'>
          <HiChevronDown />

          </h2>
          </div>
          
          <button className='btn btn-lg btncolor mt-4'>Done</button>
        </div>
      </div>


      </form>
      <div className='my-md-5 my-sm-5 p-1 '>
      <h4 className=' space text-center'>Back To Top</h4>

      </div>
    </main>
    
    </>
  )
}

export default EditTask