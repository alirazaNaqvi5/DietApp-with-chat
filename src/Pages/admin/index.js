import React from 'react'
import Modal from '../../components/Modal';
import AddMeal from './AddMeal';
import Adduser from './Adduser';
import RemoveUser from './RemoveUser';

export default function Admin() {
  const [data, setData ] = React.useState([]);
  

  return (

        <>
    <h2 className="text-center justify-center mt-4 text-black bg-red-500 font-bold ">Admin's Panel</h2>
        <div className="flex-grow p-6 text-center mt-6">
        <label className="font-semibold p-1" for="Requests">select an option to view requests:</label>
        <br/>
    
    {/* <select className="border font-semibold flex-col hover:bg-gray-300 ml-4" name="requests" id="req">
    <option className="border font-semibold hover:bg-gray-300" value="sr">select requests</option>
    
      <option className="border font-semibold hover:bg-gray-300" value="pr">pending requests</option>
      <option className="border font-semibold hover:bg-gray-300" value="ar">approved requests</option>
      
    </select> */}
    <Modal/>
              </div>
        <section class="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" class="object-cover object-center h-full w-full" src="https://th.bing.com/th/id/R.02e415dd0d883e90cfb7c45b81da8623?rik=VkOCTVZ7TC6BQg&pid=ImgRaw&r=0"/>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <Adduser/>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            {/* <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Remove user's</h2>
              <p className="leading-relaxed text-base">From here you can easily remove/block users from your website.</p>
              <button className="mt-3 text-white bg-green-500 border-0 py-1 px-2  text-1xl font-bold focus:outline-none hover:bg-green-600 rounded ">
                Remove users
              </button>
            </div> */}
            <RemoveUser/>
          </div>
         
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font w-full ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap w-full">
        <div className="flex flex-wrap w-full">
          <div className="p-4 lg:w-1/2 w-full md:w-full">
            <AddMeal/>
          </div>
          
        </div>
      </div>
    </section>
    </>
        
      );
    }
    
