import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text>Email</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 8 }} />
      <Text>Password</Text>
      <TextInput secureTextEntry style={{ borderWidth: 1, marginBottom: 16 }} />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};