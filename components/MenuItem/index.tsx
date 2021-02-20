import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const MenuItem = ({ data, onclick }) => {
  return (<TouchableOpacity onPress={() => onclick && onclick(data)}>
    <Text style={styles.text}>{data.title}</Text>
  </TouchableOpacity>)
}
