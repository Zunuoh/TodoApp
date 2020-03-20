import React, { useState, useContext } from 'react';
import {Text, View, Modal, TouchableHighlight, TextInput, TouchableOpacity, Button} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { ItemContext } from '../App';


const collectionScreen = () =>{
      const[add, setAdd] = useState("");
    const { task, addItems, removeItems } = useContext(ItemContext)
return(

    <View style={{flexDirection:"row"}}>
         <View style={{flexDirection:"row"}}>
  <Text style={{fontSize:30, fontWeight:"bold"}}>ADD TASKS HERE</Text>
  </View>
      
    <View style={{marginTop:50, marginRight:50, alignContent:"center", justifyContent:"center"}}>
      <TextInput style={{height:40, borderRadius:30, borderBottomColor:"black",marginRight:100}}
      placeholder="Enter new task here"
      value={add}
      onChangeText={text=>setAdd(text)}
      />

      <Button
      title="SUBMIT"
      color="#000"
      onPress={()=>addItems(add)}/>
    </View>

    </View>
  
);
    
}

export default collectionScreen;