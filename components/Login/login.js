import React from 'react';
import { View, StyleSheet } from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}></View>
     );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    JustifyContent: 'space-betwen',
  },
});

export default Login;
