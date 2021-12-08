import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, Linking } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("4rtmelly");
  const [user, setUser] = useState({});

  async function search() {
    try {
      const response = await fetch(`http://192.168.0.55:4242/api/users/${username}`);
      const user = await response.json();

      setUser(user.json);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setUsername}
        value={username}
      />

      <Button
        onPress={search}
        title="Search"
        color="#841584"
      />

<Text>{user.id}</Text>
<Text>{user.bio}</Text>
<Text onPress={() => Linking.openURL(user.html_url)}> {user.html_url} </Text>    
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});