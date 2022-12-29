import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Glass = () => {
  const [name, setName] =useState<string>("All")
  const [time, setTime] = useState<string>("")
  //Working with master card
  return (
    <View>
      <Text>Glass</Text>
    </View>
  )
}

export default Glass