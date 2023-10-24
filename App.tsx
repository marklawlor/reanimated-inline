import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);
  const color = useSharedValue('red');
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
    setCounter(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, width}} />
      <Animated.Text style={{color}}>
        I should be red! Count: {counter}
      </Animated.Text>
      <Button onPress={handlePress} title="Hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
    zIndex: 100,
  },
});
