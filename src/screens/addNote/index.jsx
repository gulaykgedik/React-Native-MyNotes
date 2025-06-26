import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import  { useState } from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { AppColors } from '../../utils/colors'
import { MYNOTES } from '../../utils/screen'


const AddNote=({route,navigation})=> {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const {addNote}=route.params

    const saveNote=()=>{
        if(!title.length>0){
            alert("Lütfen başlık ve açıklama alanlarını doldurun.")
            return;
        }
        if(description.length>0 && description.length<10){
            alert("Açıklama en az 10 karakter olmalıdır.")
            return;
        }
        const form={
            id:Math.random().toString(36).substring(2, 15),
            title:title,
            description:description,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString(),

        }
        addNote(form)
        Alert.alert("Not Eklendi","Notunuz başarıyla eklendi.")
        navigation.goBack()
        navigation.navigate(MYNOTES)
        setTitle('')
        setDescription('')
    }
  return (
    <SafeAreaView style={screenStyle.container}>
    <View style={screenStyle.container}>
        <View style={{flex:1,padding:10}}>
            <Text style={{fontSize:16,fontWeight:"600"}}>Başlık</Text>
            <TextInput 
            placeholder='Notunuzun başlığını buraya yazın...'
            value={title}
            onChangeText={setTitle}
            style={{
                backgroundColor:"white",
               borderWidth:1,
               padding:5,
               margin:8,
                borderRadius:5,
                borderColor:AppColors.GRAY,
                height:50,
                margimVertical:10

            }}
            />
          <Text style={{fontSize:16,fontWeight:"600"}}>Açıklama</Text>
            <TextInput 
            placeholder='Notunuzu buraya yazın...'
            value={description}
            onChangeText={setDescription}
            numberOfLines={20}
            multiline={true}
            style={{
                backgroundColor:"white",
               borderWidth:1,
               padding:5,
               margin:8,
                borderRadius:5,
                borderColor:AppColors.GRAY,
                height:300,
                margimVertical:10

            }}
            />
        </View>
        <View>
            <TouchableOpacity 
            onPress={()=>{

                saveNote()
            }}
            style={{
                width:"90%",
                margin:"auto",
                backgroundColor:AppColors.PRIMARY,
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:10,
                alignItems:"center",
                marginBottom:20
            }}>
                <Text style={{
                    textAlign:"center",
                    color:AppColors.WHITE,
                    fontSize:22,
               
                }}>Not Ekle</Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}
export default AddNote
const styles = StyleSheet.create({})
