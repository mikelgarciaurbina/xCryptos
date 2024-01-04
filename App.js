import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, Text, View } from 'react-native';

import { store, persistor } from './src/reducers';
import Pages from './src/pages';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
        const a = await Asset.loadAsync([
          require('./assets/images/app-brandname.png'),
          require('./assets/images/app-logo.png'),
          require('./assets/images/icon-add.png'),
          require('./assets/images/icon-alert.png'),
          require('./assets/images/icon-back-ios.png'),
          require('./assets/images/icon-back.png'),
          require('./assets/images/icon-close.png'),
          require('./assets/images/icon-delete.png'),
          require('./assets/images/icon-settings.png'),
        ]);
        // añadir las imagenes a un contexto y utilizarlas
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View onLayout={onLayoutRootView} style={styles.container}>
          <StatusBar style="light" />
          <Pages />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
