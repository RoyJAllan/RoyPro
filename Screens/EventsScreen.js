import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Divider, TextInput } from 'react-native-paper';

export default function EventsScreen({ navigation }){

          //Mock Data

          //Mock Data
           const [Events, setEvents] = React.useState([
        { id: 1, text: 'Surfing'},
        { id: 2, text: "Dancing"},
        { id: 3, text: "Sleeping"},
    ]);
    
  return (
           
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.topMarg}>Events</Text> 
      
      
      //NOTE - Event list
      
      <List.Section>
                {Events.length === 0 && <Text>No Events Added</Text>}
                {Events.map((item, index) => (
                   <View key={item.id}>
                    <List.Item 
                            title={item.text}
                            left={props => <List.Icon {...props} icon="checkbox-blank-circle-outline" />}
                            accessibilityLabel={`Event ${item.text}`}
                            />
                        {index < Events.length - 1 && <Divider style={styles.marg16}/>}
                    </View>
                ))}
            </List.Section>
                      


      <Button style={styles.buts} mode='contained' onPress={ () => 
                navigation.navigate('Event Details')}>
                  Event Details
                </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'flex-start', backgroundColor: '#99cafcff' },
  title: { fontSize: 24, fontWeight: '600' },
  topMarg: {marginBottom: 16, marginTop: 20},
  buts: {backgroundColor: '#2c2727ff'},
  marg16:{marginBottom: 16},
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mt16: { marginTop: 16 },
});
 