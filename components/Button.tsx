import React from 'react'
import { StyleProp, StyleSheet, TextStyle, ViewStyle, TouchableOpacity, Text } from 'react-native'

import tokens from '../design-tokens'

export type ButtonProps = {
  children: React.ReactChild
  onPress?: () => void
}

export default function Button({
  children,
  onPress
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    lineHeight: tokens.font.leading.md,
    paddingVertical: tokens.space['3'],
    paddingHorizontal: tokens.space['6'],
    width: 'auto',
    borderRadius: tokens.radius['5'],
    backgroundColor: tokens.color.seaweed['21']
  },

  text: {
    color: tokens.color.white,
    fontSize: tokens.font.size.md,
    lineHeight: tokens.font.leading.md
  }
})
