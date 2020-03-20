import React, { useState } from 'react';
import {Text, View, Animated} from 'react-native';
const collList = [{"id":0, "name":"Sync Pinterst"}, {"id":1, "name":"Sync"}, {"id":2, "name":"Sync Pinterst"},{"id":3, "name":"Sync Pinterst"}, {"id":4, "name":"Sync Pinterst"}, 
{"id":5, "name":"Sync Pinterst" }]

const LinkScreen = () =>{
  const[coll, setColl] = useState(collList);
  return(
    <View style={{flex:1, backgroundColor:"#000000"}}>
      <View style={{padding:20}}>
    <Text style={{fontWeight:"bold", fontSize:20, color:"white"}}>Work</Text>
  </View>
  
  <View style={{flexDirection:"row", height:10, width:"80%", backgroundColor:"white", borderColor:"#000", borderWidth:2, margin:5, marginBottom:40}}>
    <Animated.View style={{backgroundColor:"#ffffff", width:"50%"}}>
     
    </Animated.View>
    <Text style={{paddingLeft:80,marginTop:-10, color:"white"}}>80%</Text>
  </View>


 {coll.map(colls => {
   return(
    <View style={{backgroundColor:"#a9a9a9", flexDirection:"row", height:65, borderRadius:10, marginLeft:30, marginRight:30, marginTop:5}}>
    <Text style={{padding:20}}>{colls.name}</Text>
  </View>
   );
    

  })}

 



    </View>
  



  );
}

export default LinkScreen;