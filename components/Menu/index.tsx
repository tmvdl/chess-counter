import React from 'react'
import { Text, View } from 'react-native'

import { MenuItem } from '..'
import { styles } from './styles'
import { buttons } from '../../data'

const { container, title } = styles

export const Menu = ({ onclick }) => {
  const renderItem = (index: number, item = {}) =>
    <MenuItem key={index} data={item} onclick={onclick} />

  return (
    <View style={container}>
      <Text style={title}>Chess Counter</Text>
      {buttons.map((item: {}, index: number) => renderItem(index, item))}
    </View>
  )
}
