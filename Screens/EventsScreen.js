import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Divider, TextInput, IconButton, Snackbar, Icon } from 'react-native-paper';
import { ThemeContext } from '../Theme/ThemeContext'; 


//Json Data
 const JSON_URL = 'https://raw.githubusercontent.com/RoyJAllan/RemoteData/refs/heads/main/tasks.json';


export default function EventsScreen({ navigation }){


  //NOTE - REMOTE DATA test
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [snack, setSnack] = React.useState('');
  const {theme} = React.useContext(ThemeContext)
  

           const styles = StyleSheet.create({
                  container: { 
                      flex: 1, 
                      padding: 40, 
                      justifyContent: 'flex-start',
                      backgroundColor: theme.colors.background 
                  },
                  divider: {marginVertical: 20},
                  divider2: {marginVertical: 10},
                  divder3: {marginVertical: 30},
                  homeMarg: {
                      marginBottom: 16, 
                      marginTop: 20,
                      color: theme.colors.text 
                  },
                  homeInput: {marginBottom: 24},
                  buts: {
                      backgroundColor: theme.colors.primary 
                  },
                  inputContainer: {
                      width:'80%',
                      alignContent: 'center',
                      marginBottom: 24,
                  },
                  mb8: { marginBottom: 8 },
                  buttonText: {
                      color: theme.colors.buttoncolor 
                  }
              });

         

        //ANCHOR - Load Remote data into our APP from the JSON file on gitpages
  const loadRemote = React.useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg('')
      const request = await fetch(JSON_URL, {cache: 'no-store'})
      if(!request.ok) throw new Error(`HTTP ${request.status}`);
      const jsonReq = await request.json();
      const arrReq = Array.isArray(jsonReq) ? jsonReq : [];


      // Clean + store remote tasks
      const cleaned = arrReq.filter(
        (x) => x && typeof x.id !== 'undefined' && typeof x.title === 'string'
      );
      setEvents(cleaned);
      console.log('REMOTE DATA:', cleaned); 


      
    }
    catch (e) {
      console.error(e);
      setErrorMsg('USER YOUR APP FAILED: Failed to load remote data');
      setSnack('Failed to Load Event Data');
    }
    finally {
      setLoading(false);
    }
  }, 
  []);
  
  //TEST FETCH on start
  React.useEffect(() => {
    loadRemote();
  },
  [loadRemote]);

    //NOTE - Merge local and remote data
  //const merged = [...remoteTasks, ...Events];

    //ANCHOR - Search filter
  const [q, setQ] = React.useState('');
  const filteredEvents = events.filter((event) =>
    (event.title ?? '').toLowerCase().includes(q.toLowerCase())
  );



      // Track Selected Event
      const [selectedEvent, setSelectedEvent] = React.useState(null);

      //Handle selection
      const handleEventSelect = (event) => {setSelectedEvent(event); };

      //Navigate Event Details with selected event
      const navigateToEventDetails = () => { if (selectedEvent) {
        const eventDetails ={
        id:selectedEvent.id,
        title:`${selectedEvent.title}` ,
        text: `${selectedEvent.description}\n\nDate: ${selectedEvent.date}\nTime: ${selectedEvent.startTime} - ${selectedEvent.endTime} 
        \nLocation: ${selectedEvent.location} \nCategory: ${selectedEvent.category}\nSpots Available: ${selectedEvent.spotsRemaining}/${selectedEvent.capacity} ${selectedEvent.isCancelled ? '\n\n This event has been cancelled' : ''}`
          
        };
        navigation.navigate('Event Details', {
          event: {
          id:selectedEvent.id,
          displayText: selectedEvent.title,
          OriginalData: selectedEvent
        },
        eventDetail: eventDetails

      }); 
      

       
     } else {
        alert('Please select an Event');
      }

      };

// Add info for events

  return (
           
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.topMarg}>Events</Text> 

      <Divider style={styles.divider2} />



      {/* Search Input */}
      <TextInput
        label="Search events..."
        value={q}
        onChangeText={setQ}
        style={styles.mb16}
        mode="outlined"
      />

      {/* Loading */}
      {loading && <Text>Loading events...</Text>}

      {/* Error Message */}
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}


      <Divider style={styles.divider2} />
      
      {/* Event List */}
      
      <List.Section>
                {filteredEvents.length === 0 && <Text>No Events Added</Text>}
                {filteredEvents.map((event, index) => {       
                return (
                   <View key={event.id}>
                    <List.Item 
                            title={event.title}
                            onPress={() => handleEventSelect(event)}
                            left={props => 
                            <IconButton
                            {...props} 
                            icon={
                              selectedEvent?.id === event.id
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                            }
                            iconColor={selectedEvent?.id ===event.id ? '#2c2727ff' : '#8a8787ff'}
                            onPress={() => handleEventSelect(event)}
                            />
                          }
                            accessibilityLabel={`Event ${event.title}`}
                            style={[
                            selectedEvent?.id === event.id && styles.selectedItem
                            ]}
                            />
                            
                        {index < filteredEvents.length - 1 && <Divider style={styles.marg16}/>}
                    </View>
                );
                })}
            </List.Section>
                     
          <Divider style={styles.divider} />

          {selectedEvent && (
            <View style={styles.selectedContainer}>
            <Text style={styles.selectedText}>
            Selected: {selectedEvent.title}
           </Text>
           </View>
            )}

      <Divider style={styles.divider} />
      
           
      <Button 
      labelStyle={styles.buttonText}
       mode='contained' 
       onPress={navigateToEventDetails}
       disable = {!selectedEvent || loading}
       >
                  Event Details
                </Button>
        

           <Divider style={styles.divider} />     

            <Snackbar
        visible={!!snack}
        onDismiss={() => setSnack('')}
        action={{
          label: 'OK',
          onPress: () => setSnack(''),
        }}
        duration={3000}
      >
        {snack}
      </Snackbar>
    </View>
  );
}


 