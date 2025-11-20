import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Divider, TextInput, IconButton } from 'react-native-paper';

export default function EventsScreen({ navigation }){

          //Mock Data

          //Mock Data
           const [Events, setEvents] = React.useState([
        { id: 1, text: 'Surfing'},
        { id: 2, text: "Dancing"},
        { id: 3, text: "Sleeping"},

         
    ]);

      const [EventDetails, setDetails] = React.useState([
        {id: 1, text: 'Join us for a friendly comp at Boomerang beach!'},
        { id: 2, text: 'Learn to dance with professional instructors!' },
        { id: 3, text: 'Relax and recharge with a guided sleep session!' },

      ]);

      // Track Selected Event
      const [selectedEvent, setSelectedEvent] = React.useState(null);

      //Handle selection
      const handleEventSelect = (item) => {setSelectedEvent(item); };

      //Navigate Event Details with selected event
      const navigateToEventDetails = () => { if (selectedEvent) {
        const eventDetail = EventDetails.find(details => details.id === selectedEvent.id);

        navigation.navigate('Event Details', {
          event:selectedEvent,
          eventDetail: eventDetail
        });
      } else {
        alert('Please select an Event')
      }

      };

    
  return (
           
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.topMarg}>Events</Text> 
      
      
      {/* Event List */}
      
      <List.Section>
                {Events.length === 0 && <Text>No Events Added</Text>}
                {Events.map((item, index) => (
                   <View key={item.id}>
                    
                    <List.Item 
                            title={item.text}
                            onPress={() => handleEventSelect(item)}
                            left={props => 
                            <IconButton
                            {...props} 
                            icon={
                              selectedEvent?.id === item.id
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                            }
                            iconColor={selectedEvent?.id ===item.id ? '#2c2727ff' : '#8a8787ff'}
                            onPress={() => handleEventSelect(item)}
                            />
                          }
                            accessibilityLabel={`Event ${item.text}`}
                            style={[
                            selectedEvent?.id === item.id && styles.selectedItem
                            ]}
                            />
                            
                        {index < Events.length - 1 && <Divider style={styles.marg16}/>}
                    </View>
                ))}
            </List.Section>
                     
          <Divider style={styles.divider} />

          {selectedEvent && (
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>
            Selected: {selectedEvent.text}
          </Text>
        </View>
      )}

      <Divider style={styles.divider} />
      
           
      <Button style={styles.buts}
       mode='contained' 
       onPress={navigateToEventDetails}
       disable = {!selectedEvent}
       >
                  Event Details
                </Button>
        

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
 