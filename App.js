import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import {useState} from 'react';

const taskList = [{"id":0, "name":"Assignments"},{"id":1, "name":"Wash"},{"id":2, "name":"Cook"},{"id":3, "name":"Shop"},
{"id":4, "name":"Events"}]


const Stack = createStackNavigator();

export const ItemContext = React.createContext({});


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);   
 
  const[task, setTask] = useState(taskList);
  const addItems = (add) =>{
      //  if (add==""){
      //    alert("Enter task");
      //    return
      //  }
        let obj={
          id:Math.random(),
          name:add
        }
    
        let newArr=[...task, obj]
        setTask(newArr)
        // setAdd("")
      }
 const removeItems = Item =>{
   let removed = task.filter((removeItem)=>{
     return removeItem.id != Item.id
   }) 
   setTask(removed)
   }




  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <ItemContext.Provider value={{task, addItems, removeItems}}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
        </ItemContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
