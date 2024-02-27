import {Button, Text, View} from 'react-native';

const ButtonComponent = ({onPress, title}) => {
  console.log('====================================');
  console.log(onPress);
  console.log('====================================');

  return (
    <View>
      <Button title={title} onPress={onPress}></Button>
    </View>
  );
};

export default ButtonComponent;
