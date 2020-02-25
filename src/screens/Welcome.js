import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import Lottie from 'lottie-react-native';

import Piggy from '../../piggy.json';
import Checkmark from '../../checkmark.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

export default class Welcame extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    checked: false,
    checkedProcess: new Animated.Value(0),
    welcomeProcess: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.spring(this.state.welcomeProcess, {
      toValue: 100,
      speed: 3,
      bounciness: 5,
    }).start();
  }

  onCheck() {
    Animated.timing(this.state.checkedProcess, {
      toValue: 100,
      duration: 400,
    });

    this.setState({checked: true});

    setTimeout(() => {
      this.props.navigation.navigate('Home');
      this.setState({checked: false});
    }, 1000);
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={[
              {height: 300, width: 300},
              {
                transform: [
                  {
                    translateY: this.state.welcomeProcess.interpolate({
                      inputRange: [0, 100],
                      outputRange: [height * -1, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Lottie
              style={{height: 300, width: 300}}
              source={Piggy}
              autoPlay
              loop
            />
          </Animated.View>
          <Animated.Text
            style={[
              styles.title,
              {
                transform: [
                  {
                    translateX: this.state.welcomeProcess.interpolate({
                      inputRange: [0, 100],
                      outputRange: [width * -1, 0],
                    }),
                  },
                ],
              },
            ]}>
            Piggy Bank
          </Animated.Text>
          <Animated.Text
            style={[
              {fontSize: 16, fontWeight: 'normal'},
              {
                transform: [
                  {
                    translateX: this.state.welcomeProcess.interpolate({
                      inputRange: [0, 100],
                      outputRange: [width, 0],
                    }),
                  },
                ],
              },
            ]}>
            "Show me the money"
          </Animated.Text>
        </View>
        <View style={{margin: 20}}>
          {this.state.checked ? (
            <Lottie style={styles.checked} source={Checkmark} autoPlay />
          ) : (
            <Animated.View
              style={[
                {
                  transform: [
                    {
                      translateY: this.state.welcomeProcess.interpolate({
                        inputRange: [0, 100],
                        outputRange: [height, 0],
                      }),
                    },
                  ],
                },
              ]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onCheck()}>
                <Text style={styles.buttonTitle}>Get Money</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#23B26D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  checked: {
    width: 100,
  },
});
