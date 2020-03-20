import React, { useState, useContext } from 'react';
import {Text, View, Modal, TouchableHighlight, TextInput, TouchableOpacity, Button} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { ItemContext } from '../App';


const collectionScreen = () =>{
      const[add, setAdd] = useState("");
    const { task, addItems, removeItems } = useContext(ItemContext)
return(

    <View style={{flex:1,backgroundColor:"#E4E3DB"}}>
         <View style={{padding:20}}>
  <Text style={{fontSize:30, fontWeight:"bold"}}>ADD TASKS HERE</Text>
  </View>
      
      <View style={{alignContent:"center", justifyContent:"center", padding:70}}>
       <TextInput style={{height:40, borderRadius:30, borderBottomColor:"black"}}
       placeholder="Enter new task here"
       value={add}
       onChangeText={text=>setAdd(text)}
       />

       <View style={{marginTop:20, width:70}}>
       <Button 
       title="SUBMIT"
       color="#000"
       onPress={()=>addItems(add)}/>
       </View>
       
      </View>
  

    </View>
  
);
    
}

export default collectionScreen;