import { View, Text } from 'react-native'
import React, { useState } from 'react'

 //Working with master card

const Glass = () => {
  const [name, setName] =useState<string>("All")
  const [time, setTime] = useState<string>("")

 const way = 5;



  return (
    <View>
      <Text>Glass</Text>
    </View>
  )
}

export default Glass
