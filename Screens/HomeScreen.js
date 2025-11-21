// NOTE Imported Libs from react
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Divider, TextInput} from 'react-native-paper';


// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation }) {
    //STATE section
     const [searchQuery, setSearchQuery] = React.useState('');

    //Combined name to create user

    const getFullName = () => {
      return `${firstName} ${lastName}`.trim();

    };

    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.homeMarg}>Elevate Horizon Connect</Text>
            
            <Divider style={styles.divider2} />
            <Text variant='headlineLarge' style={styles.homeMarg}>Welcome</Text>

            
            <Text variant='bodyLarge' style={styles.homeMarg}> Find and register for Events</Text>
            

            

            

            
                     {/* Search Input */}
                          <TextInput
                            label="Search events..."
                            value={q}
                            onChangeText={setQ}
                            style={styles.mb16}
                            mode="outlined"
                          />
                    <Divider style={styles.divider} />

                    <Button style={styles.buts}  mode='contained'>
                View Details
            </Button>

        </View>
    );
}


// NOTE MAIN Styles ref 
const styles = StyleSheet.create({
 container: { flex: 1, padding: 20, justifyContent: 'flex-start', backgroundColor: '#99cafcff' },
  divider: {marginVertical: 20},
  divider2: {marginVertical: 10},
  homeMarg: {marginBottom: 16, marginTop: 20},
  homeInput: {marginBottom: 24},
  buts: {backgroundColor: '#2c2727ff'},
  inputContainer: {
    width:'80%',
    alignContent: 'center',
    marginBottom: 24,
    mb8: { marginBottom: 8 },
  }
});

/*CODE Graveyard
    * OLD title CSS for text on react native core
    * title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
    * 
    * saved for style ref <Button mode='outlined' onPress={() =>{}}>
                Go to Gallery
            </Button>
*/