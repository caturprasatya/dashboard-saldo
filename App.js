import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Dashboard from './app/screens/dashboard.jsx'

export default function App() {
  return (
      <ScrollView
      contentContainerStyle={{flex: 1}}
        style={styles.scrollview}
        onScroll={true}
        nestedScrollEnabled={true}
        horizontal={false}
      >
        <Dashboard />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
});
