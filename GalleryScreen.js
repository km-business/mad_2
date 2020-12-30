import React from 'react';
import DetailView from './Detailview';
import ListView from './ListView';
import {StyleSheet, ScrollView} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
class GalleryScreen extends React.Component {
  render() {
    return (
      <NativeRouter>
            <ScrollView style={styles.container}>
            <Route path="/" exact component={ListView} />
            <Route path="/detail/:id" component={DetailView} />
            </ScrollView>
            </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GalleryScreen;