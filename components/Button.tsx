import React from 'react'
import { StyleProp, StyleSheet, TextStyle, ViewStyle, TouchableOpacity, Text } from 'react-native'

import tokens from '../design-tokens'
import Icon, { IconType } from './Icon'

type ButtonStyle = 'primary' | 'secondary'
type ButtonShape = 'normal' | 'circle'

export type ButtonProps = {
  children?: React.ReactChild
  buttonStyle?: ButtonStyle
  buttonShape?: ButtonShape
  icon?: IconType
  onPress?: () => void
}

export default function Button({
  children,
  onPress,
  buttonStyle = 'primary',
  buttonShape = 'normal',
  icon
}: ButtonProps) {
  const buttonStyleSheet: ViewStyle[] = [styles.button]
  const textStyleSheet: TextStyle[] = [styles.text]
  if (buttonStyle === 'secondary') {
    buttonStyleSheet.push(styles.secondaryButton)
    textStyleSheet.push(styles.secondaryButtonText)
  }
  if (buttonShape === 'circle') {
    buttonStyleSheet.push(styles.circularButton)
  }

  let content: React.ReactNode | null = null
  if (icon) {
    content = <Icon name={icon} style={textStyleSheet} size={24} />
  } else if (children) {
    content = <Text style={textStyleSheet}>{children}</Text>
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyleSheet}>
      {content}
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

  secondaryButton: {
    backgroundColor: tokens.color.white,
    borderColor: tokens.color.seaweed['21'],
    borderWidth: 1
  },

  circularButton: {
    width: 48,
    height: 48,
    borderRadius: tokens.radius['5'],
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: tokens.color.white,
    fontSize: tokens.font.size.md,
    lineHeight: tokens.font.leading.md
  },

  secondaryButtonText: {
    color: tokens.color.seaweed['21']
  }
})
