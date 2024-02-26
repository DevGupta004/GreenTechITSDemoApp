import React from 'react';
import {Text} from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import ProfileScreen from '../screens/ProfileScreen/profileScreen';


const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Logo = () => (
  null
);

const TabBarIcon = props => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

const Home = props => (
    <Screen>
    <Logo />
    <Text>Welcome to GreenTech ITS</Text>
  </Screen>
);

const TodoList = () => (
  <Screen>
    <Logo />
    <Text>Services</Text>
  </Screen>
);

const Profile = () => (
  <ProfileScreen></ProfileScreen>
);

const BottomTabNavigation = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#223322',
      activeBackgroundColor: 'red',
    }}
    appearance={{
      shadow: true,
      floating: true,
      whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
      dotSize: DotSize.SMALL,
    }}>
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="home" />
        ),
      }}
    />
    <Tabs.Screen
      name="TodoList"
      component={TodoList}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="list" />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="user" />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default BottomTabNavigation;
