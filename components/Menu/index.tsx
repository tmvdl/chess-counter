import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { MenuItem } from '..'
import { styles } from './styles'
import { buttons } from '../../data';

export const Menu = ({ onclick }) => {
  const renderItem = ({ index, item }) =>
    <MenuItem key={index} data={item} onclick={onclick} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Counter</Text>
      {buttons.map((item, index) => renderItem({ index, item }))}
    </View>
  )
}
