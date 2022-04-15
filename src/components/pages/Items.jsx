import React from 'react'
import { useParams } from 'react-router-dom'


const Items = () => {
  const {category} = useParams();
  return (
    <div>Items = {category}</div>
  )
}

export default Items