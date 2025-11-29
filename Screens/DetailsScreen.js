import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button,  Divider } from 'react-native-paper';
import { ThemeContext } from '../Theme/ThemeContext'; 


export default function DetailsScreen({ route, navigation }) {
  const { user = 'Guest' } = route.params ?? {};
  const [loading, setLoading] = React.useState(false);
  const { event, eventDetail} = route.params;
  const {theme} = React.useContext(ThemeContext)
  const [events, setEvents] = React.useState([]);

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
                    divder4: {marginVertical: 50},
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

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // fake wait
  };
  
  const navigateToEventRegister = () => { if (eventDetail) {
        const eventTitles ={
        id:eventDetail.id,
        title:`${eventDetail.title}`};
        navigation.navigate('Register', {
          event: {
          id:eventDetail.id,
          displayText: eventDetail.title,
          OriginalData:eventDetail
        },
        eventTitle: eventTitles

      }); 
      

       
     } else {
        alert('Please select an Event');
      }

      };

  return (
    <View style={styles.container}>
      
      <Divider style={styles.divider}/>
      <Text variant="headlineSmall">{eventDetail.title}</Text>
      <Divider style={styles.divider}/>
      <Text variant="bodyMedium" style={styles.detailText}>
        {eventDetail.text}
      </Text>
      <Divider style={styles.divider}/>
      
      <Button labelStyle={styles.buttonText} style={styles.buts} mode='contained' onPress={navigateToEventRegister} >
                        Register for Event
                      </Button>
      

      
    </View>
  );
}

 expo

//ANCHOR -  Grave
 //<Button style={styles.mt16} onPress={() => navigation.goBack()}>
    //    Go Back
  //    </Button>