import React from 'react'
import {useContext} from 'react'
import { context } from '../App'

function ComponentC() {
    const first = useContext(context)
    console.log(first)
  return (
    <div>
        {first.a}
        {first.b}
    </div>
  )
}

export default ComponentC