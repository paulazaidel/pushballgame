import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import {Ball} from './components/Ball';

let timer: NodeJS.Timeout;

const App = () => {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      // Decreasing UpForce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      // Increasing Speed
      const newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      // Setting new position based on speed
      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }

      setPosY(newPosY);
    };

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  const handleButton = () => {
    setUpForce(7);
  };

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.text}>UpForce {upForce.toFixed(2)}</Text>
          <Text style={styles.text}>Velocity {speed.toFixed(2)}</Text>
          <Text style={styles.text}>PosY {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Text>Push it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
