import React from 'react'
import { Input } from '@mui/material'

export default function TextInput(value,validation, register) {
  return (
      <Input
          {...register(value,{...validation})} />
  )
}

