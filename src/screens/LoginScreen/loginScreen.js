import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useMyContext } from '../../contextProvider/myContext';

const LoginScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const { data, setData } = useMyContext();

  const handleLogin = () => {
    setData({mobileNumber:mobileNumber, otp: '1234'});
    console.log('context data:',data);
    navigation.navigate('VerifyOTP');
  };

  const handleRegistration = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <View style={{alignItems: 'center'}}>
        <Button title="Login" onPress={handleLogin} />
        <Text> if don't have account ? Register first</Text>
        <Button title="Register" onPress={handleRegistration} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
