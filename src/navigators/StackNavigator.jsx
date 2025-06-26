import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ADDNOTE, MYNOTES } from '../utils/screen'
import MyNotes from '../screens/myNotes'
import AddNote from '../screens/addNote'
import { AttachCircle, More, Share } from 'iconsax-react-nativejs'
import { AppColors } from '../utils/colors'

const Stack = createNativeStackNavigator()


const StackNavigator = () => {
  return (
   
    <Stack.Navigator >
      <Stack.Screen name={MYNOTES} component={MyNotes} options={{headerShown:false}} />
      <Stack.Screen name={ADDNOTE} component={AddNote} options={{
        title:"",
        headerRight: () => (<View style={{flexDirection:"row",alignItems:"center",marginRight:10}}>
            <AttachCircle size={25}/>
            <Share size={25} style={{marginLeft: 10}}/>
            <More size={25} style={{marginLeft: 10}}/>
        </View>),
        headerStyle: {
          backgroundColor:AppColors.WHITE,
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}/>
      <Stack.Screen name="Profile" component={() => <View><Text>Profile Screen</Text></View>} />
    </Stack.Navigator>
  )
}

export default StackNavigator