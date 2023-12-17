import React from 'react'

const Input = ({title, errorMessage, ...props}) => {
  return (
    <div className='space-y-2'>
        <label>{title}</label>
        <input {...props} className=" input input-bordered w-full" type="text" />
        {errorMessage && (
            <div className='text-red-500'>{errorMessage}</div>
        )}
    </div>
  )
}

export default Input