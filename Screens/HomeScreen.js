// NOTE Imported Libs from react
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Divider, TextInput} from 'react-native-paper';
import { ThemeContext } from '../Theme/ThemeContext';  


// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation }) {
    //STATE section
     const [searchQuery, setSearchQuery] = React.useState('');
     const {theme} = React.useContext(ThemeContext)

   const styles = StyleSheet.create({
        container: { 
            flex: 1, 
            padding: 20, 
            justifyContent: 'flex-start',
            backgroundColor: theme.colors.background 
        },
        divider: {marginVertical: 20},
        divider2: {marginVertical: 10},
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
            <Text variant='headlineMedium' style={styles.homeMarg}>Elevate Horizon Connect</Text>
            
            <Divider style={styles.divider2} />
            <Text variant='headlineLarge' style={styles.homeMarg}>Welcome</Text>

            
            <Text variant='bodyLarge' style={styles.homeMarg}> Find and register for Events</Text>
            

            

            

            
                   
                    <Divider style={styles.divider} />

                    <Button labelStyle={styles.buttonText}  mode='contained'>
                View Details
            </Button>

        </View>
    );
}


