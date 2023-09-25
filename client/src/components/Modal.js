import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { PlusIcon } from '@heroicons/react/24/solid';



const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === 'Edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : null,
    tag: editMode ? task.tag : null,
    address: editMode ? task.address : null,
    description: editMode ? task.description : null,
    purchase_date: editMode ? task.purchase_date : null,
    price: editMode ? task.price : null,
    surface: editMode ? task.surface : null,
    price_m2: editMode ? task.price_m2 : null,
    cashflow: editMode ? task.cashflow : null,
    link_rental: editMode ? task.link_rental : null,
    link_bank: editMode ? task.link_bank : null,
    link_travaux: editMode ? task.link_travaux : null,
  })

  const postData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('WORKED')
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }


  const editData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/${task.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('WORKED')
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }


  const handleChange = (e) => {
    console.log('CHANGING !!', e)
    const { name, value } = e.target
    setData(data => ({
      ...data,
      [name]: value
    }))

    console.log("toto", data)
  }

  return (

    <div class="absolute overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] bg-opacity-50 bg-gray-900 flex justify-center items-center">
      <div class="relative w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {mode} your property
            </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setShowModal(false)}>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form className="ml-4 max-w-md flex-col gap-4">
            <TextInput className="m-2" value={data.title} name="title" placeholder="Title" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.tag} name="tag" placeholder="Tag" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.address} name="address" placeholder="Address" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.description} name="description" placeholder="Description" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.purchase_date} name="purchase_date" placeholder="Purchase Date" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.price} name="price" placeholder="Price" required type="text" onChange={handleChange}/>
            <TextInput className="m-2" value={data.surface} name="surface" placeholder="Surface" required type="text" onChange={handleChange}/>
            <div>
            </div>
          </form>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button color="success" size="sm" onClick={editMode ? editData : postData}>
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Propety
            </Button>
          </div>
        </div>
      </div>
    </div>




    // <div className="overlay">
    //   <div className="modal">
    //     <div className="from-title-container">
    //       <h3> Let's {mode} your task</h3>
    //       <button onClick={() => setShowModal(false)}>x</button>
    //     </div>
    //     <form>
    //       <input 
    //         required
    //         maxlenght={30}
    //         placeholder="Your task go here"
    //         name="title"
    //         value={data.title}
    //         onChange={handleChange}
    //       />
    //       <br/>
    //       <input 
    //         required
    //         type="range"
    //         min="0"
    //         max="100"
    //         name="progress"
    //         value={data.progress}
    //         onChange={handleChange}
    //       />
    //       <input className={mode} type="submit" onClick={editMode ? editData : postData}/>
    //     </form>
    //   </div>
    // </div>
  )
}

export default Modal
