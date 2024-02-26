import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import AppNavigation from './src/navigation/appNavigation';
import {theme} from './src/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import { MyProvider } from './src/contextProvider/myContext';

// export const useMyContext = () => useMyContext(MyContext);

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState('Initial Data');

  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
        </MyProvider>
    </ThemeProvider>
  );
}

export default App;
