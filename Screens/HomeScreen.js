//NOTE  Imported libaries from react
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//NOTE Main body Component for Home Screen
export default function HomeScreen({ navigation }) {
    return (
         <View style={styles.container}>
         <Text style={styles.title}>Home</Text>
         <Button
        title="Go to Details"
        onpress={()=> navigation.navigate('Details', {user: 'Guest'})}
         />
         </View> 
    );
}


//NOTE Main Styles ref

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});