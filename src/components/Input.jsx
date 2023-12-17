import React from 'react'

const Input = ({title, errorMessage, ...props}) => {
  return (
<<<<<<< HEAD
    <div className='space-y-2'>
        <label>{title}</label>
        <input {...props} className=" input input-bordered w-full" type="text" />
        {errorMessage && (
            <div className='text-red-500'>{errorMessage}</div>
        )}
=======
    <div className="flex flex-col space-y-2 ">
        <label>{title}</label>
        <input {...props} className='input input-primary w-96'></input>
        {errorMessage && (<div className='text-red-500'>{errorMessage}</div>)}
>>>>>>> d4be5785325845e0762f5ee88df19c0c46433190
    </div>
  )
}

export default Input