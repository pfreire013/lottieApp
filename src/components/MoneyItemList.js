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
import Coins from '../../coins.json';

const {width} = Dimensions.get('window');

export default class MoneyItemList extends Component {
  state = {
    accountInfoProcess: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.spring(this.state.accountInfoProcess, {
      toValue: 100,
      speed: 1,
      bounciness: 10,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.cardContainer,
          {
            transform: [
              {
                translateX: this.state.accountInfoProcess.interpolate({
                  inputRange: [0, 100],
                  outputRange: [width * -1, 0],
                }),
              },
            ],
          },
        ]}>
        <View>
          <Text style={styles.title}>Brenda Carvalho</Text>
          <Text style={styles.subtitle}>$2000.00</Text>
        </View>
        <Lottie style={styles.coins} source={Coins} autoPlay loop={false} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D45C9',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000',
    marginLeft: 8,
    marginTop: 4,
  },
  coins: {
    height: 50,
    width: 50,
  },
});
