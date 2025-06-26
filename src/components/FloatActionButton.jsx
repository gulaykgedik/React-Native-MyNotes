import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-nativejs'
import { AppColors } from '../utils/colors'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.7}> 
      <Add size={50} color={AppColors.WHITE}/>
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.PRIMARY,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        cursor: 'pointer',
        height: 60,
    }
})