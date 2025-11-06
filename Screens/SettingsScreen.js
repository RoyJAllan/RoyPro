import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Divider, TextInput } from 'react-native-paper';

export default function SettingScreen({ navigation }){

          

    
  return (
           
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.topMarg}>Settings</Text> 
      
      
      
      
      
           <Divider style={styles.divider} />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'flex-start', backgroundColor: '#99cafcff' },
  title: { fontSize: 24, fontWeight: '600' },
  topMarg: {marginBottom: 16, marginTop: 20},
  buts: {backgroundColor: '#2c2727ff'},
  divider: {marginVertical: 20},
  marg16:{marginBottom: 16},
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mt16: { marginTop: 16 },
});
 