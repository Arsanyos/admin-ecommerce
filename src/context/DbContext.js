/* eslint-disable react/prop-types */
import { React, useContext, createContext, useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from 'src/Base'
import { async } from '@firebase/util'

const dataContext = createContext()

export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  let user_growth = []
  let products_sold = []
  let revenue = 0
  let prd_cat = []
  let newCust = 10
  let recurringCust = 20
  const collectionNames = ['products', 'users']
  async function fetchData(collectionName) {
    const q = query(collection(db, collectionName))
    const querySnapshot = await getDocs(q)
    let temp = []
    querySnapshot.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id })
    })
    if (collectionName.toLowerCase() === 'products') {
      setProducts(temp)
    } else if (collectionName.toLowerCase() === 'users') {
      setUsers(temp)
    }
  }
  useEffect(() => {
    console.log(users)
    for (let i = 0; i < collectionNames.length; i++) {
      fetchData(collectionNames[i])
    }
  }, [])
  return (
    <dataContext.Provider
      value={{
        products,
        users,
        user_growth,
        products_sold,
        revenue,
        prd_cat,
        newCust,
        recurringCust,
      }}
    >
      {children}
    </dataContext.Provider>
  )
}

export const Data = () => {
  return useContext(dataContext)
}
