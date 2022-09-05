/* eslint-disable react/prop-types */
import { React, useContext, createContext, useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from 'src/Base'
import { async } from '@firebase/util'

const dataContext = createContext()

export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, 'products'))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      })
    }
    fetchData()
  }, [])
  return <dataContext.Provider value={{ products }}>{children}</dataContext.Provider>
}

export const Data = () => {
  return useContext(dataContext)
}
