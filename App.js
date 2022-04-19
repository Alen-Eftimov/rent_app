/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';
import 'react-native-pager-view';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  LogBox,
} from 'react-native';

// import HomeScreen from './src/screens/Home';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import Post from './src/components/Post'
// import feed from './assets/data/feed'
// import GuestsScreen from './src/screens/Guests';

import Router from './src/navigation/Router';

// const post1 = feed[0]

const App: () => React$Node = () => { 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView>         */}
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        {/* <GuestsScreen /> */}        
      {/* </SafeAreaView> */}
      <Router />
    </>
    
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!", 
  "[Remote debugger]",
]);

export default App;
