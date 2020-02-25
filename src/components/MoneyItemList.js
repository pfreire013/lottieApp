import React, {Component} from 'react';

import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

import Lottie from 'lottie-react-native';
import Coins from '../../coins.json';

// import { Container } from './styles';

export default class MoneyItemList extends Component {
  render() {
    return (
      <>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.title}>Brenda Carvalho</Text>
            <Text style={styles.subtitle}>$2000.00</Text>
          </View>
          <Lottie style={styles.coins} source={Coins} autoPlay loop={false} />
        </View>
      </>
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
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#999',
  },
  coins: {
    height: 50,
    width: 50,
  },
});
