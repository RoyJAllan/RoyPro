import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput, Divider, Menu, Provider } from 'react-native-paper';
import { ThemeContext } from '../Theme/ThemeContext'; 


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
            <Divider style={styles.divider} />
            <Button labelStyle={styles.buttonText} style={styles.buts} mode='contained' onPress={ () => {
                const fullName = getFullName();
                alert(`Thank You ${fullName}!`);
            }}>
                Submit Details
            </Button>

            

        </View>
    );
}


