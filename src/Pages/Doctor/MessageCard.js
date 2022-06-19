import React from 'react'

export const MessageCard = (props) => {

    


  return (
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Messages From Patients</h1>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-auto md:w-1/2 w-auto">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section></>  )
}
