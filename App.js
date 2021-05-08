import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const api = {
  key: "378301404f7c6399119faa561e6e9c89",
  base: "https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

export default function App() {
  return (
    <View style={styles.main}>
      <View style='searchBox'>
      <TextInput style={styles.searchBar} placeholder='Enter the name of the city'/>
      </View>
        <View>
          <View style={styles.locationBox}>
            <View style={styles.location}>
              <Text>
                </Text>
                </View>
            <View style={styles.date}>
              <Text>
                Text
                </Text>
                </View>
          </View>
          <View style={styles.weatherBox}>
            <View style={styles.temp}>
              <Text>
              Text
              </Text>
            </View>
            <View style={styles.weather}>
            <Text>
              Text
              </Text>
              </View>
          </View>
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '70%',
    height: 30,
    textAlign: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,        
},

});
