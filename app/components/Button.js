

'use client'
import React from 'react'

export default function Button() {
  return (
    <div>
         <button className='btn bg-green-400 text-black px-2 mt-6 rounded-2xl  ' onClick={() => console.log('I have clicked here')}>Click here </button>
    </div>
  )
}
