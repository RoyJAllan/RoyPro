import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Divider, TextInput, Switch, Snackbar } from 'react-native-paper';
import { ThemeContext } from '../Theme/ThemeContext';  

export default function SettingScreen({ navigation }){
  const {isDark, toggleTheme, theme} = React.useContext(ThemeContext);

  const [sounds, setSounds] = React.useState(true);
  const [snack, setSnack] = React.useState(false);
  
  const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'flex-start' },
  title: { fontSize: 24, fontWeight: '600' },
  topMarg: {marginBottom: 16, marginTop: 20},
  divider: {marginVertical: 20},
  marg16:{marginBottom: 16},
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mt16: { marginTop: 16 },
  buttonText:{color: theme.colors.buttoncolor}
});

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.mb16}>Settings</Text>

      <List.Section>
        <List.Item
          title="Sounds"
          description={sounds ? 'On' : 'Off'}
          right={() => (
            <Switch value={sounds} onValueChange={() => setSounds(!sounds)} />
          )}
        />
      </List.Section>

      <List.Section>
        <List.Item 
          title="Dark Mode"
          description={isDark ? 'On' : 'Off'}
          
          right={() => (
            <Switch  value={isDark} onValueChange={toggleTheme}  />
          )}
        />
      </List.Section>

      <Button labelStyle={styles.buttonText} mode="contained" onPress={() => setSnack(true)}>
        Save Settings
      </Button>

      <Snackbar visible={snack} onDismiss={() => setSnack(false)} duration={1500}>
        Settings saved
      </Snackbar>
    </View>
  );
}


 