import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { Menu, Counter } from './components'

type State = { view, seconds }

export default class App extends Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = { view: 'menu', seconds: 0, }
  }

  renderMenu = () => <Menu onclick={({ seconds }) => this.setState({ view: 'counter', seconds })} />

  renderCounter = (seconds) => <Counter seconds={seconds} />

  renderViews = () => {
    const { view, seconds } = this.state

    switch (view) {
      case 'menu': return this.renderMenu();
      case 'counter': return this.renderCounter(seconds);
      default: return <></>
    }
  }

  render() { return <View>{this.renderViews()}</View> }
}