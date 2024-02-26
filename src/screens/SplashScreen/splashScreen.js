import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button, Image, Text, View } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();
    console.log("navigation", navigation);

    const handleNavigation = () => {
        // Handle the Navigation
        console.log('navigation');
        // handleSplashScreen();
        navigation.navigate('Login');
    };

    const uri = '../../assets/logo.png'
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, }}>Splash Screen</Text>
            <View style={{paddingVertical: 100}}>
                <Image
                    style={{height: 300, width: 300}}
                    source={require(uri)}
                ></Image>
            </View>
            <ActivityIndicator size="large" color="#0000ff" />
            <View style={{paddingVertical: 60}}>
                <Button style={{padding: 100, width: 100}} title='Next' onPress={handleNavigation} ></Button>
            </View>
        </View>
    );
    
}

export default SplashScreen;