import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import "../styles/NewTask.css";

const NewTask = () => {
  return (
    <>
      <main className="container my-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <h1>My Tasks</h1>
          </div>
          <div className="d-flex  gap-2">
            <p className="addnew">
              <FaPlus />
            </p>
            <p className="addnew"> Add New Task</p>
          </div>
        </div>
        <div>
          <div className="border rounded p-3 my-5">
            <div className="d-md-flex justify-content-between gap-3 align-items-center">
              <p className=" red">Urgent</p>
              <div className="d-flex gap-3">
                <button className=" btn new btn-md-lg ">
                  <SlNote /> Edit
                </button>
                <button className=" btn new1 btn-md-lg">
                  <RiDeleteBin6Line /> Delete
                </button>
              </div>
            </div>
            <hr />
            <div>
              <h2>FinTech Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>
          <div className="border rounded p-3 my-5">
            <div className="d-md-flex justify-content-between gap-3 align-items-center">
              <p className=" green">Important</p>
              <div className="d-flex gap-3">
                <button className=" btn new btn-lg ">
                  <SlNote /> Edit
                </button>
                <button className=" btn new1 btn-lg">
                  <RiDeleteBin6Line /> Delete
                </button>
              </div>
            </div>
            <hr />
            <div>
              <h2>Agro Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>
          <div className="border rounded p-3 my-5">
            <div className="d-md-flex justify-content-between gap-3 align-items-center">
              <p className=" red">Urgent</p>
              <div className="d-flex gap-3">
                <button className=" btn new btn-lg ">
                  <SlNote /> Edit
                </button>
                <button className=" btn new1 btn-lg">
                  <RiDeleteBin6Line /> Delete
                </button>
              </div>
            </div>
            <hr />
            <div>
              <h2>FinTech Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>
          <div className="border rounded p-3 my-5">
            <div className="d-md-flex justify-content-md-between gap-3 align-items-center">
              <p className=" green">Important</p>
              <div className="d-flex gap-3">
                <button className=" btn new btn-lg ">
                  <SlNote /> Edit
                </button>
                <button className=" btn new1 btn-lg">
                  <RiDeleteBin6Line /> Delete
                </button>
              </div>
            </div>

            <hr />
            <div>
              <h2>Agro Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h4 className=" text-center ">Back To Top</h4>
        </div>
      </main>
    </>
  );
};

export default NewTask;
