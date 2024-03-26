import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  text: {
    color: 'white',
  },
  area: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  control: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    margin: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#0061FF',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
