import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { NewRelicModule } from 'react-native-new-relic-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Set Attribute"
        onPress={() => {
          NewRelicModule.setAttribute('test', 'test');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
