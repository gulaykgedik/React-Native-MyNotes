import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import  { useState } from 'react'
import Header from '../../components/Header'
import { screenStyle } from '../../styles/screenStyle'
import { FlatList } from 'react-native'
import NoteCard from '../../components/NoteCard'
import FloatActionButton from '../../components/FloatActionButton'
import { screenHeight,screenWidth} from '../../utils/constants'
import { ADDNOTE } from '../../utils/screen'

screenHeight

const MyNotes = ({navigation}) => {


    const [notes, setNotes] = useState([
        {id: 1, title: 'Note 1', description: 'This is the content of note 1.',date: '2023-10-01'},
        {id: 1, title: 'Note 2', description: 'This is the content of note 2.',date: '2023-10-01'},
        {id: 1, title: 'Note 3', description: 'This is the content of note 3.',date: '2023-10-01'},
    ])

    const addNote= (note) => {
       const newNote=[...notes, note]
         setNotes(newNote)
    }

    const removeNote = (id) => {
        const newNotes = notes.filter((item) => item.id !== id);
        setNotes(newNotes);
        Alert.alert("Note deleted successfully");
    }
  return (
   <SafeAreaView style={screenStyle.container}>
    <View style={screenStyle.container}>
    <Header/>
     <FlatList 
     scrollEnabled={true}
     style={{height: screenHeight/4, marginBottom:110}}
     data={notes}
     renderItem={({item}) => (
       <NoteCard item={item} removeNote={removeNote} />) }
       keyExtractor={(item) => item.id.toString()}
     />

     <FloatActionButton onPress={()=>{
       navigation.navigate(ADDNOTE,{ addNote: addNote})
     }} />
    </View>
   </SafeAreaView>  
  )
}

export default MyNotes

const styles = StyleSheet.create({})