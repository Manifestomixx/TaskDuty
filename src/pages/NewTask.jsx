import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi";
import "../styles/NewTask.css";

const NewTask = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <main className='container'>
      <h1 className='my-5'><IoIosArrowBack />New Task</h1>

      <form>

      <div>
        <div  className='d-flex flex-column gap-3'>
          <div className=''>
          <label htmlFor="" className='textform'>Task Title</label>
          <input type="text" required placeholder='E.g Project Defense, Assignment...' />
          </div>
          <div className=''>
          <label htmlFor="" className='textform '>Description</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Briefly describe your task...' className='bordersize'></textarea>
        
          </div>
          <div className=''>
          <label htmlFor="" className='textform '>Tags</label>
          <input type="text" required placeholder='Urgent Important '  className='pt-3 box' />
          
          <h2 className='downicon d-md-flex justify-content-md-end align-items-center'>
          <HiChevronDown />

          </h2>
          </div>
          
          <button className='btn btn-lg btncolor mt-4'>Done</button>
        </div>
      </div>


      </form>
      <div className='my-md-5 my-sm-5 p-1 '>
      <h4 className='space text-center'onClick={scrollToTop}>Back To Top</h4>

      </div>
    </main>
    </>
  );
};

export default NewTask;
