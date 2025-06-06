import React from 'react'

function Card({username,btnText="click",paragraph,picture}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mt-6">
            <img
              className="w-full h-full object-cover"
              src= {picture}
              alt="Nature"
            /> 
            <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
            <p className="mt-2 text-gray-600 text-sm">
              {paragraph}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">
              {btnText}
            </button>
          </div>
  )
}

export default Card