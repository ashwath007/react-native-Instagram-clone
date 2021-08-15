
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Story from 'react-native-story'

const App = () => {

  const stories = [
    {
      id: "4",
      source: require("./asset/one.jpg"),
      user: "Ugur Erdal",
      avatar: require("./asset/three.jpg")
    },
    {
      id: "2",
      source: require("./asset/four.jpg"),
      user: "Mustafa",
      avatar: require("./asset/seven.jpg")
    },
    {
      id: "5",
      source: require("./asset/six.jpg"),
      user: "Emre Yilmaz",
      avatar: require("./asset/two.jpg")
    },
    {
      id: "3",
      source: require("./asset/seven.jpg"),
      user: "Cenk Gun",
      avatar: require("./asset/seven.jpg")
    },
  ];

  return (
    <View>
      <Story
            unPressedBorderColor="#e95950"
            pressedBorderColor="#ebebeb"
            stories={stories}
            footerComponent={
                <TextInput
                    placeholder="Send message"
                    placeholderTextColor="white"
                    style={styles.footerInput}
                />
            }
        />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
