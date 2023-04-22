import HomeScreen from './src/pages/HomeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}

// import React from 'react';
// import { View, StyleSheet, Text,ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.mainContainer}>

//       <View style={styles.headerContainer} />
//       <View style={styles.bodyContainer}>
//         <View style={[styles.box, {flex: 0.2}]} >
//           <Text>WelcomeText</Text></View>
//         <View style={[styles.box, {flex: 0.4}]} >
//           <Text>Through photography, the beauty of Mother Nature can be frozen in time.</Text>
//           </View>
//         <View style={[styles.box, {flex: 0.4}]} >
//         <Text>Through photography, the beauty of Mother Nature can be frozen in time.</Text>
//         <Text>Through photography, the beauty of Mother Nature can be frozen in time.</Text>
//         <Text>Through photography, the beauty of Mother Nature can be frozen in time.</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   headerContainer: {
//     height: 200,
//     backgroundColor: 'white',
//   },
//   bodyContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'stretch',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   box: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginVertical: 10,
//     elevation: 5,
//   },
// });

