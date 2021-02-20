import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, lostText, lostInvertedText } from './styles'

let interval1, interval2

const pad = (text = '') => text.length < 2 ? ('0' + text) : text

const writer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes)
  return [minutes, seconds]
    .map(time => pad(time.toString()))
    .join(':')
}

const clear = () => {
  clearInterval(interval1)
  clearInterval(interval2)
}

export const Counter = ({ seconds, onback }) => {
  let seconds1 = seconds, seconds2 = seconds
  const [time1, setTime1] = useState(writer(seconds1))
  const [time2, setTime2] = useState(writer(seconds2))
  const [lost, setLost] = useState(0)

  const lost1 = () => setLost(1)
  const lost2 = () => setLost(2)

  const onText1Click = () => {
    if (lost === 0) {
      clear()
      interval1 = setInterval(() => {
        if (seconds1 === 0) {
          clear()
          lost1()
        } else setTime1(writer(--seconds1))
      }, 1000)
    }
  }

  const onText2Click = () => {
    if (lost === 0) {
      clear()
      interval2 = setInterval(() => {
        if (seconds2 === 0) {
          clear()
          lost2()
        } else setTime2(writer(--seconds2))
      }, 1000)
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={onText1Click}>
        <Text style={lost === 1 ? lostInvertedText : styles.invertedText}>{time1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onText2Click}>
        <Text style={lost === 2 ? lostText : styles.text}>{time2}</Text>
      </TouchableOpacity>
    </View>
  )
}
