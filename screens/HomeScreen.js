import React, { useState, Component, useContext } from 'react';
import {Text, View, Image, Animated, TextInput, Alert, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { ItemContext } from '../App';


// const taskList = [{"id":0, "name":"Assignments"},{"id":1, "name":"Wash"},{"id":2, "name":"Cook"},{"id":3, "name":"Shop"},
// {"id":4, "name":"Events"}]


const HomeScreen =()=>{
  // const[task, setTask] = useState(taskList);
  const {task, addItems, removeItems} = useContext(ItemContext);
  // const[add, setAdd] = useState("");

//  const addItems = () =>{
//    if (add==""){
//      alert("Enter task");
//      return
//    }
//     let obj={
//       id:Math.random(),
//       name:add
//     }

//     let newArr=[...task, obj]
//     setTask(newArr)
//     setAdd("")
//   }

  // const removeItems = Item =>{
  //  let removed = task.filter((removeItem)=>{
  //    return removeItem.id != Item.id
  //  }) 
  //  setTask(removed)
  //  }
 
  
  return(
    <ScrollView style={{backgroundColor:"#E4E3DB"}}>
<View style={{flex:1, backgroundColor:"#E4E3DB"}}>
  <View style={{padding:20}}>
  <Text style={{fontSize:30, fontWeight:"bold"}}>Groceries</Text>
  </View>

  <View style={{flexDirection:"row", height:8, width:"80%", backgroundColor:"white", borderColor:"#000", borderWidth:2, margin:5, marginBottom:40}}>
    <Animated.View style={{backgroundColor:"#000", width:"80%"}}>
     
    </Animated.View>
    <Text style={{paddingLeft:80,marginTop:-10, color:"white"}}>80%</Text>
  </View>


{task.map(tasks =>{
   return(
    <View style={{backgroundColor:"#ffffff", flexDirection:"row", height:65, borderRadius:10, marginLeft:30, marginRight:30, marginTop:5}}>
    <Text style={{padding:20}}>{tasks.name}</Text>
    <View style={{alignContent:"center", justifyContent:"center", marginLeft:140}}>
      <TouchableOpacity onPress={()=>removeItems(tasks)}>
      <FontAwesome 
        name="trash-o"
        size={26}
        color="black"
      
        />
      </TouchableOpacity>
  
    </View>
    
    <View>
      </View>
  </View>


   );
 })}
 



 </View>
 </ScrollView>
  );
}

export default HomeScreen;