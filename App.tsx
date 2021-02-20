import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { Menu, Counter } from './components'

type State = { view, seconds }

export default class App extends Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      view: 'menu',
      seconds: 0,
    }
  }

  renderMenu() {
    return <Menu onclick={({ seconds }) => this.setState({ view: 'counter', seconds })} />
  }

  renderCounter(seconds) {
    return <Counter seconds={seconds} onback={() => this.setState({ view: 'menu' })} />
  }

  renderViews = () => {
    const { view, seconds } = this.state

    switch(view) {
      case 'menu': return this.renderMenu(); break;
      case 'counter': return this.renderCounter(seconds); break;
    }

    return <></>
  }

  render() {
    return <View>{this.renderViews()}</View>
  }
}