
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
import NavigationBar from 'react-native-navbar';
import Story from 'react-native-story';
import Icon from 'react-native-vector-icons/Feather';

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

  const titleConfig = {
    title: 'Instagram',
    ellipsizeMode : "head",
    style: {
      fontSize: 28,
      marginTop:12,
      fontFamily: 'Billabong',
    }
  };

 

  return (
    <View>
      <View>
      <NavigationBar
        title={titleConfig}
        rightButton={<Icon
          style={{ marginRight: 16, marginTop: 12}}
          name='camera'
          type='font-awesome'
          size={24}
        />

        }
        leftButton={<Icon
          style={{ marginLeft: 16, marginTop: 12}}
          name='settings'
          type='font-awesome'
          size={24}
        />}
        style={styles.nav}
      />
      </View>
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
  nav:{
    height:55,
    fontSize: 30,
    fontFamily: 'Billabong',
  },
  footerInput:{
    marginTop:0
  }
});

export default App;
