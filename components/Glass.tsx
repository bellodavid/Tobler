import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Glass = () => {
  const [name, setName] =useState<string>("")
  const [time, setTime] = useState<string>("")
  return (
    <View>
      <Text>Glass</Text>
    </View>
  )
}

export default Glass