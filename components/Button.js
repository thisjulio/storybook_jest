import React from "react"
import { TouchableOpacity, Text } from "react-native"

export default ({color, title}) => {
    return <TouchableOpacity style={{padding: 10, backgroundColor: color}}>
        <Text>{title}</Text>
      </TouchableOpacity>
}