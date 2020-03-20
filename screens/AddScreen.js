import React, { useState } from 'react';
import {Text, View, Modal, TouchableHighlight, TextInput, TouchableOpacity, Button} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const collectionList = [{"id":0, "name":"Groceries"}, {"id":1, "name":"Work"}]


const AddScreen = ()=>{
  const[collection, setCollection] = useState(collectionList);
  const[addition, setAddition] = useState("");

  const addToColl = () =>{
      if(addition==""){
          alert("Please enter collection")
          return
      }
      let objt = {
          id:Math.random,
          name:addition
      }

      let NewArr = [...collection, objt]
      setCollection(NewArr)
      setAddition("")
  }

  const removeFromColl=item=>{
      let removedItem = collection.filter((RemoveItem)=>{
          return RemoveItem.id !=item.id
      })
      setCollection(removedItem);
  }
    return(
        <View style={{flex:"row"}}>
          <View style={{padding:20}}>
              <Text style={{fontWeight:"bold", fontSize:20}}>CREATE COLLECTIONS</Text>
          </View>

          {collection.map(collections =>{
              return(
                <View style={{backgroundColor:"#ffffff", flexDirection:"row", height:65, borderRadius:10, marginLeft:30, marginRight:30, marginTop:5}}>
                   <Text style={{padding:20}}>{collections.name}</Text>
                   <View style={{alignContent:"center", justifyContent:"center", marginLeft:140}}>
                   <TouchableOpacity onPress={()=>removeFromColl(collections)}>
                       <FontAwesome 
                         name="trash-o"
                         size={26}
                         color="black"
                    />
                    </TouchableOpacity>
                   </View>
                </View>
              );
          })}

<View style={{flexDirection:"row", padding:40}}>
    <TextInput
    placeholder="Kindly enter a collection"
    value={addition}
    onChangeText={txt=>setAddition(txt)}/>

<Button
title="SUBMIT"
color="#000"
onPress={addToColl}
/>
</View>





        </View>
    );
}
   


export default AddScreen;