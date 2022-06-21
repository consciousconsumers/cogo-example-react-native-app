import React from 'react'
import { View, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { NumberProp } from 'react-native-svg'

const iconList = {
  plus: require(`./icons/plus-24.svg`).default,
  minus: require(`./icons/minus-24.svg`).default
}

export type IconType = keyof typeof iconList

type Props = {
  name: IconType
  style?: StyleProp<TextStyle>
  size?: NumberProp
}

export default function Icon({ name, size = 20, style }: Props) {
  const SvgIcon = iconList[name]
  if (!SvgIcon) {
    console.error(`Icon: Missing declaration for ${name}. See iconList`)
    return null
  }
  return (
    <View>
      <SvgIcon
        width={size}
        height={size}
        style={[styles.icon, StyleSheet.flatten(style)]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: 'black'
  }
})
