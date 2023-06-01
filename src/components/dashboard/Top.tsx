import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('screen').height;

interface top{
    children:any
}
const Top = (props:top) => {
  return (
    <View style={styles.top}>
      {
        props.children
      }
    </View>
  )
}

export default Top

const styles = StyleSheet.create({
    top:{
        backgroundColor:'blue',
        height: height*0.15,
        borderBottomRightRadius:90
    }
})