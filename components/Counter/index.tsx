import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { lostText, lostInvertedText, styles } from './styles'

const { invertedText, text } = styles

let interval1, interval2

const pad = (text = '') => text.length < 2 ? ('0' + text) : text

const sec2time = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes)
  return [minutes, seconds]
    .map(time => pad(time.toString()))
    .join(':')
}

const clear = () => {
  clearInterval(interval1)
  clearInterval(interval2)
  return false
}

export const Counter = ({ seconds }) => {
  let seconds1 = seconds, seconds2 = seconds
  const [time1, setTime1] = useState(sec2time(seconds1))
  const [time2, setTime2] = useState(sec2time(seconds2))
  const [lost, setLost] = useState(0)

  const setTime = (which: number) => which === 1 ? setTime1 : setTime2
  const interval = (which: number) => which === 1 ? ((value) => interval1 = value) : ((value) => interval2 = value)
  const isFinished = (which: number) => (which === 1 ? seconds1 : seconds2) === 0
  const decSec = (which: number) => which === 1 ? --seconds1 : --seconds2
  const update = (which: number) => setTime(which)(sec2time(decSec(which)))
  const finish = (lost: number) => { clear(); setLost(lost) }
  const tap = (which: number) => interval(which)(setInterval(() => isFinished(which) ? finish(which) : update(which), 1000))
  const onTextClick = (which: number) => () =>  { if (lost === 0) { clear(); tap(which) } }

  return (
    <View>
      <TouchableOpacity onPress={onTextClick(1)}>
        <Text style={lost === 1 ? lostInvertedText : invertedText}>{time1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onTextClick(2)}>
        <Text style={lost === 2 ? lostText : text}>{time2}</Text>
      </TouchableOpacity>
    </View>
  )
}
