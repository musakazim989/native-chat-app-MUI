import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const SignUp = () => {
  return (
    <>
      <View>
        <Text style={styles.signtext}>Sign Up</Text>
      </View>

      <Pressable>
        <Text>Google</Text>
        <Text>Google</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  signtext: {
    fontSize: 24,
    color: '#282A3A',
    fontFamily: 'Montserrat-Bold',
  },
});

export default SignUp;
