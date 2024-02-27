import React, {useState} from 'react';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import {useMyContext} from '../../contextProvider/myContext';
import ButtonComponent from '../../components/ButtonComponent/buttonComponent';

const VerifyOTPScreen = ({navigation}) => {
  const {data, setData} = useMyContext();
  console.log('VerifyOTPScreen called', data);
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Here you can implement your verification logic
    if (otp === data.otp) {
      // Example OTP, replace with your actual verification logic
      // Navigate to the next screen upon successful verification
      navigation.navigate('App');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <ButtonComponent title="Verify OTP" onPress={handleVerifyOTP} />
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

export default VerifyOTPScreen;
