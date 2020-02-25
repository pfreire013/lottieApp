import React, {Component} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import Lottie from 'lottie-react-native';
import MoneyItemList from '../components/MoneyItemList.js';
import HappyPig from '../../happy-pig.json';

const {width} = Dimensions.get('window');

export default class Home extends Component {
  static navigationOptions = {
    title: 'Piggy bank',
    headerTintColor: '#4D45C9',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: '#4D45C9',
    },
  };

  state = {
    userInfoProgress: new Animated.Value(0),
    scrollOffset: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.userInfoProgress, {
      toValue: 100,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Animated.Text
            style={[
              styles.welcome,
              {
                transform: [
                  {
                    translateX: this.state.userInfoProgress.interpolate({
                      inputRange: [0, 100],
                      outputRange: [width * -1, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            Bem vindo, Paulo
          </Animated.Text>
          <Animated.Text
            style={[
              styles.price,
              {
                transform: [
                  {
                    translateX: this.state.userInfoProgress.interpolate({
                      inputRange: [0, 100],
                      outputRange: [width * -1, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            $78.000
          </Animated.Text>
          <Lottie style={styles.happyPig} source={HappyPig} autoPlay />
        </View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {y: this.state.scrollOffset},
              },
            },
          ])}>
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  happyPig: {
    width: 250,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  price: {
    fontSize: 42,
    fontWeight: 'normal',
    marginLeft: 20,
    marginTop: 8,
  },
});
