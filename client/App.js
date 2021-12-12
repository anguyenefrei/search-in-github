import React, { useState } from 'react';
import { StyleSheet, Text, Image,Button,TouchableHighlight,TouchableNativeFeedback, View, TextInput, Linking } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  async function search() {
    try {
      console.log(username)
      const response = await fetch(`http://192.168.1.55:4242/users/${username}`);
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
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.separator}>
        <Text style={ {fontSize: 20,marginLeft: 85, marginTop: 10}}> I N F O R M A T I O N S </Text>
      </View>

      <Image
      style={styles.picProfil}
      source={
        {uri: `${user.avatar_url}`}
      }
      >
      </Image>


      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}> Id : {user.id}</Text>
        <Text style={styles.infoText}> Biography : {user.bio}</Text>
        <Text style={styles.infoText}> Followers : {user.followers}</Text>
        <Text style={styles.infoText}> Following : {user.following}</Text>
        <Text style={styles.infoText}> Location : {user.location}</Text>
        <Text style={styles.infoLink} onPress={() => Linking.openURL(user.repos_url)}> Link repository : {user.repos_url}</Text>
        <Text style={styles.infoLink} onPress={() => Linking.openURL(user.html_url)}> Link account {user.html_url} </Text>    
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
  },
  H2: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  input: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 100,
    borderColor: '#000000',
    backgroundColor: 'white',
    width:  160,
    height: 30,
    borderRadius: 5
  },
  button: {
    width: 160,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 100,
    backgroundColor: '#006400',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    padding: 7,
    color: 'white'
  },
  separator: {
    justifyContent: 'flex-start',
    marginTop: 20,
    width: 450,
    height: 50,
    backgroundColor: '#2E8B57'
  },
  infoContainer: {
    opacity: 0.6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginLeft: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    height: 350,
    marginRight: 20,
    borderRadius: 20
  },
  infoText: {
    fontSize: 15,
    paddingTop: 20
  },
  infoLink: {
    color: '#4169E1'
  },
  picProfil: {
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 135,
    width: 100,
    height: 100
  }
});