import React, { useState } from 'react';
import { StyleSheet, Text, Button,TouchableHighlight,TouchableNativeFeedback, View, TextInput, Linking } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  async function search() {
    try {
      console.log(username)
      const response = await fetch(`http://localhost:4242/users/${username}`);
      const user = await response.json();
      setUser(user.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.H2}> Bienvenue sur Github Stalker </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Entrez un login github"
      />
      <TouchableNativeFeedback
      onPress={search}
      style={styles.zoneB}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </View>
      </TouchableNativeFeedback>

      <Button
      color={'green'}
      onPress={search}
      title={'press me'}
      />
      

      <View style={styles.separator}>
        <Text style={ {fontSize: 20, textAlign: 'center', paddingTop: 10}}> I N F O R M A T I O N S </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}> Id : {user.id}</Text>
        <Text style={styles.infoText}> Biography : {user.bio}</Text>
        <Text style={styles.infoText}> Followers : {user.followers}</Text>
        <Text style={styles.infoText}> Following : {user.following}</Text>
        <Text style={styles.infoText}> Location : {user.location}</Text>
        <Text style={styles.infoText}> Twitter Username : {user.twitter_username}</Text>
        <Text style={styles.infoText}> Nombre repos publique : {user.public_repos}</Text>
        <Text style={styles.infoText} onPress={() => Linking.openURL(user.repos_url)}> Link repository : {user.repos_url}</Text>
        <Text style={styles.infoText} onPress={() => Linking.openURL(user.html_url)}> Link account {user.html_url} </Text>    
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  H2: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20
  },
  input: {
    position: 'absolute',
    top: 70,
    left: 30,
    borderColor: '#000000',
    backgroundColor: 'white',
    width:  160,
    height: 30,
    borderRadius: 5
  },
  zoneB: {
    position: 'absolute',
    width: 200,
    backgroundColor: '#000000',
    top: 60,
    right: 20
  },
  button: {
    marginBottom: 30,
    width: 130,
    height: 30,
    position: 'absolute',
    top: 70,
    right: 30,
    backgroundColor: '#006400',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    padding: 7,
    color: 'white'
  },
  separator: {
    position: 'absolute',
    top: 120,
    width: 450,
    height: 50,
    backgroundColor: '#2E8B57'
  },
  separatorBot: {
    position: 'absolute',
    bottom: 50,
    width: 450,
    height: 50,
    backgroundColor: '#2E8B57'
  },
  infoContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 190,
    left: 20
  },
  infoText: {
    fontSize: 15,
    // fontWeight: 'bold',
    paddingTop: 20
  }
});