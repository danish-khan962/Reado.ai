import React from 'react'

const DeleteConfirmation = () => {
  return (
    <div className='max-w-2xl w-full text-center bg-linear-to-bl from-[#0A0A0A] via-[#2A2A2A] to-[#212121] text-neutral-300 p-4 sm:p-5 md:p-5 lg:-8 rounded-xl'>
        <p> Deleting this entry will permanently be vanished from everywhere, including our databases. </p>
        <p>Do you still wish to delete?</p>

        <div className='flex flex-row justify-between items-center gap-4 mt-8'>
            <button className='py-2 px-6 bg-linear-to-bl from-red-600 via-red-500 to-red-700 font-semibold w-full hover:from-red-800 hover:via-red-700 transition-all ease-in-out duration-200'>Yes, Delete</button>
            <button className='py-2 px-6 bg-linear-to-bl from-neutral-600 via-neutral-500 to-neutral-700 font-semibold w-full hover:from-neutral-800 hover:via-neutral-700 transition-all ease-in-out duration-200'>Cancel</button>
        </div>
    </div>
  )
}

export default DeleteConfirmation