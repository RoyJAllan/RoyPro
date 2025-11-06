import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, ActivityIndicator,  TextInput, Divider  } from 'react-native-paper';

export default function RegisterScreen({ route, navigation }) {
  const { user = 'Guest' } = route.params ?? {};
  const [loading, setLoading] = React.useState(false);
    //STATE INPUT
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    //Combined name to create user

    const getFullName = () => {
      return `${firstName} ${lastName}`.trim();

    };

    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.homeMarg}>Register</Text>
            
            <Divider style={styles.divider} />

            <View style={styles.inputContainer}>
                <TextInput
                    label='Enter Your Name'
                    value={firstName}
                    onChangeText={setFirstName}
                    mode='outlined'
                    left={<TextInput.Icon icon="account"/>}
                    placeholder='Enter first name here'
                    maxLength={20}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label='Enter Your last name'
                    value={lastName}
                    onChangeText={setLastName}
                    mode='outlined'
                    left={<TextInput.Icon icon="account"/>}
                    placeholder='Enter last name here'
                    maxLength={20}
                />
            </View>

            <Button style={styles.buts} mode='contained' onPress={ () => {
                const fullName = getFullName();
                alert(`Thank You ${fullName}!`);
            }}>
                Submit Details
            </Button>

            <Divider style={styles.divider} />

        </View>
    );
}


// NOTE MAIN Styles ref 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#99cafcff' },
  buts: {backgroundColor: '#2c2727ff'},
  divider: {marginVertical: 18},
  homeMarg: {marginBottom: 16, marginTop: 20},
  homeInput: {marginBottom: 24},
  inputContainer: {
    width:'80%',
    alignContent: 'center',
    marginBottom: 24,
  }
});

/*CODE Graveyard
    * OLD title CSS for text on react native core
    * title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
*/