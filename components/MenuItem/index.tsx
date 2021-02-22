import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const { text } = styles

export const MenuItem = ({ data, onclick }) => {
  const { title } = data
  return (
    <TouchableOpacity onPress={() => onclick && onclick(data)}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  )
}
