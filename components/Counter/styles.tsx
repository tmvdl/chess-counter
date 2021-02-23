import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 140,
  },
  invertedText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 140,
    transform: [{ rotate: "180deg" }],
  },
  lost: {
    backgroundColor: 'red',
  },
})

export const lostText = StyleSheet.compose(styles.text, styles.lost)

export const lostInvertedText = StyleSheet.compose(styles.invertedText, styles.lost)
