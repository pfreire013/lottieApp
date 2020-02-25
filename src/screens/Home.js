import React, {Component} from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
import MoneyItemList from '../components/MoneyItemList.js';
import LoadingMoney from '../../loading-money.json';
import HappyPig from '../../happy-pig.json';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Piggy bank',
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Bem vindo, Paulo</Text>
          <Text style={styles.price}>$78.000</Text>
          <Lottie style={styles.happyPig} source={HappyPig} autoPlay />
        </View>
        <View style={{padding: 12}}>
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
          <MoneyItemList />
        </View>
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
