import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function EventsScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      

      <Button mode='contained' onPress={ () => 
                navigation.navigate('Event Details')}>
                  Event Details
                </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '600' },
});
 