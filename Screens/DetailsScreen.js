import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, ActivityIndicator, Divider } from 'react-native-paper';

export default function DetailsScreen({ route, navigation }) {
  const { user = 'Guest' } = route.params ?? {};
  const [loading, setLoading] = React.useState(false);

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // fake wait
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.mb8}>Event Details</Text>
      <Divider style={styles.divider}/>
      

      <Button style={styles.buts} mode='contained' onPress={ () => 
                      navigation.navigate('Register')}>
                        Register for Event
                      </Button>
      <Divider style={styles.divider} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'flex-start', backgroundColor: '#99cafcff' },
   divider: {marginVertical: 20},
  buts: {backgroundColor: '#2c2727ff'},
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mt16: { marginTop: 16 },
});
 expo

//ANCHOR -  Grave
 //<Button style={styles.mt16} onPress={() => navigation.goBack()}>
    //    Go Back
  //    </Button>