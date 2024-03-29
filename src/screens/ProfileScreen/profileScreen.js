import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useMyContext} from '../../contextProvider/myContext';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../../components/ButtonComponent/buttonComponent';

const ProfileScreen = () => {
  const {data} = useMyContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Mobile Number: {data.mobileNumber}</Text>
      <Text>OTP: {data.otp}</Text>
      <View style={styles.container2}>
        <ButtonComponent
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container2: {
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
