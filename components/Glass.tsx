import { View, Text } from 'react-native'
import React, { useState } from 'react'

 

const Glass = ({name, userId}) => {

  return (
    <View>
      <Text>{name}</Text>
      <Text>{userId}</Text>
    </View>
  )
}

export default Glass
