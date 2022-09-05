/* eslint-disable react/prop-types */
import { React, useContext, createContext, useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from 'src/Base'
import { async } from '@firebase/util'

const dataContext = createContext()

export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const collectionNames = ['products', 'users']
  useEffect(() => {
    async function fetchData(collectionName) {
      const q = query(collection(db, collectionName))
      const querySnapshot = await getDocs(q)
      let temp = []
      querySnapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id })
      })
      if (collectionName.toLowerCase() == 'products') {
        setProducts(temp)
      } else if (collectionName.toLowerCase() == 'users') {
        setUsers(temp)
      }
    }
    console.log(users)
    for (let i = 0; i < collectionNames.length; i++) {
      fetchData(collectionNames[i])
    }
  }, [])
  return <dataContext.Provider value={{ products }}>{children}</dataContext.Provider>
}

export const Data = () => {
  return useContext(dataContext)
}
