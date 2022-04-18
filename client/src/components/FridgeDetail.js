import React, {useEffect, useState, useCallback} from 'react';
import {useParams} from 'react-router-dom';

export default function FridgeDetail() {
  const [fridge, setFridge] = useState();
  let { id } = useParams();
  const getFridge = useCallback(() => {
    fetch(`/fridges/${id}`)
    .then(res=>res.json())
    .then(fridge => setFridge(fridge))
  }, [id])  
  
  useEffect(() => {
    getFridge()
  }, [getFridge])

  return (

    <div>{fridge && fridge.name}</div>
  )
}
