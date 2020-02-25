import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import Lottie from 'lottie-react-native';

import Piggy from '../../piggy.json';
import Checkmark from '../../checkmark.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Welcame extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    checked: false,
  };

  onCheck() {
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
          <Lottie
            style={{height: 300, width: 300}}
            source={Piggy}
            autoPlay
            loop
          />
          <Text style={styles.title}>Piggy Bank</Text>
          <Text style={{fontSize: 16, fontWeight: 'normal'}}>
            "Show me the money"
          </Text>
        </View>
        <View style={{margin: 20}}>
          {this.state.checked ? (
            <Lottie style={styles.checked} source={Checkmark} autoPlay />
          ) : (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onCheck()}>
                <Text style={styles.buttonTitle}>Get Money</Text>
              </TouchableOpacity>
            </>
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
