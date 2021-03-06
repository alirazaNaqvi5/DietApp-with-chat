import React from 'react'
import { collection, query, where, getDocs, doc, addDoc, onSnapshot, serverTimestamp  } from "firebase/firestore";
import {db} from "../../src/firebase"
import {useAuth} from "../hooks/useAuth"

function Chat({ visible, setVisible, data, sender }) {
  const [messages, setMessages] = React.useState("");
  const {user} = useAuth();
  return (
    
       <>
          {
            visible ?
            <>
            <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen w-[30%]" style={{position:'fixed', right:0, bottom:0, backgroundColor:'#fff', border:'2px solid black'}}>
            <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div class="relative flex items-center space-x-4">
              <div class="relative">
                <span class="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt=""
                  class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div class="flex flex-col leading-tight">
                <div class="text-2xl mt-1 flex items-center">
                  <span class="text-gray-700 mr-3">{user.name}</span>
                </div>
                <span class="text-lg text-gray-600">Me</span>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button
               onClick={()=>{
                setVisible(false)
            }}
                type="button"
                class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
            </div>
          </div>


            {/* create a message item */}
            <div className="flex-1  py-2 overflow-scroll">
              
              {
                data.map((item, index) => (
                  item.messegefrom == "patient" ?
                  <div className="flex flex-col " key={index}>
                <div className="flex-1 min-w-0 p-2 lg:h-auto  lg:w-[90%] bg-gray-200 rounded-3xl mt-[16px]">
                  <p className="text-lg  text-gray-600 text-left w-full"> {item.message}</p>
                </div>
              </div>
              :
              <div className="flex flex-col items-end " key={index}>
              <div className="flex-1 min-w-0 p-2 lg:h-auto  lg:w-[90%] bg-blue-200 rounded-3xl mt-[16px]">
                <p className="text-lg  text-gray-600 text-right w-full">{item.message}</p>
              </div>
            </div>

                ))
              }
              


             


            </div>


          <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div class="relative flex">
              <span class="absolute inset-y-0 flex items-center">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </button>
              </span>


            
             



              <input
                value={messages}
                type="text"
                placeholder="Write your message!"
                class="w-[70%] focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                onChange={(e)=>{
                  setMessages(e.target.value)
                }}
              />
              <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                  onClick={async()=>{
                    const subColRef = collection(db, `${user.phone}`, sender.toString(), "chat");
                    await addDoc(subColRef,{
                      message: messages,
                      messegefrom: "doctor",
                      time: serverTimestamp()
                    });
                    setMessages("")
                  }}
                >
                  <span class="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
          </>
          :
         
          <div class="flex-1 p:2 sm:p-6 justify-center rounded-full cursor-pointer flex flex-col h-1   w-[20%]" style={{position:'fixed', right:0, bottom:10, backgroundColor:'green', border:'2px solid green', color:'#fff', textAlign:'center'}}
        //   {/* <button */}
        //   style={{color:'#fff', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}
            onClick={()=>{
                setVisible(true)
            }}
            > 
            Live Chat
            {/* </button> */}
            </div>
           
          }
        </>
     
  )
}

export default Chat