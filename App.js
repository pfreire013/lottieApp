import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import Piggy from './piggy.json';

export default function lottieApp() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie style={{height: 300, width: 300}} source={Piggy} autoPlay loop />
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Piggy Bank</Text>
      <Text style={{fontSize: 16, fontWeight: 'normal'}}>
        Show me the money
      </Text>
    </SafeAreaView>
  );
}
