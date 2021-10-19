import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';

import StackScreen from './NewsScreen/StackScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';
import StackMenuScreen from './NewsScreen/StackMenuScreen';


const NewsScreen:FC = ({navigation}: any) => {
  const NewsNavigator = createStackNavigator();

  return(
    <NewsNavigator.Navigator
      initialRouteName='StackMenuScreen'
    >
      <NewsNavigator.Screen
        name='StackMenuScreen'
        component={StackMenuScreen}
        options={{header: () => (null)}}
      />
      <NewsNavigator.Screen
        name='StackScreen'
        component={StackScreen}
        options={{
          title: 'Deven\'s Stack',
          headerStyle: {height: 110},
          headerRight: () => (
            <Avatar
              rounded
              size='medium'
              onPress={() => {navigation.navigate('ProfileScreen')}}
              source={require('./NewsScreen/StackMenuScreen/img/img2.jpg')}
              containerStyle={styles.profilePic}
            />
          )
        }}
      />
      <NewsNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <NewsNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <NewsNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <NewsNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </NewsNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    margin: 10,
  },
})
export default NewsScreen;