import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import {Ball} from './components/Ball';

const App = () => {
  const handleButton = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={0} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.text}>UpForce</Text>
          <Text style={styles.text}>Velocity</Text>
          <Text style={styles.text}>PosY</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Text>Push it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
