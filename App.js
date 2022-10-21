import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

import Navigation from './app/components/header';
import Card from './app/components/body';
import Buttons from './app/components/footer';

const navHeader = {
  header: 'ensom',
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.container}>
      <Navigation/>
      <Card/>
      <Buttons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    flexDirection: 'column', 
    paddingTop: Platform.OS == 'ios' ? 50:0,
    alignItems: 'center',
  },
});
