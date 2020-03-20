import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AddScreen from '../screens/AddScreen';
import collectionScreen from '../screens/collectionScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-reorder" />,
        }}
      />

<BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

<BottomTab.Screen
        name="Coll"
        component={collectionScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

<BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-reorder" />,
        }}
      />

    




    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'Links':
      return '';
      case 'Add':
        return '';
  }
}
