import React from 'react';

import ListHeader from "../components/ListHeader"
import ListItem from "../components/ListItem"

import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Attachements = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.log(err)
    }
  }

  //Sorted by date 
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div class="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
      <p class="text-2xl text-gray-400 dark:text-gray-500">
        <ListHeader listName={'Property List1'} getData={getData} />
        {sortedTasks?.map((task) => (
          <ListItem key={task.id} task={task} getData={getData} />
        ))}
      </p>
    </div>
  )
}

export default Attachements