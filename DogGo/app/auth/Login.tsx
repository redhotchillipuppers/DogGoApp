import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
  console.log('Running on iOS!');
}


const LoginScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogGender, setDogGender] = useState('Boy');
  const [dogAge, setDogAge] = useState(1);

  const handleLogin = () => {
    console.log({ firstName, lastName, email, dogName, dogBreed, dogGender, dogAge });
    // Add login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DogGo!</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Dog Name"
        value={dogName}
        onChangeText={setDogName}
      />

      <Picker
        selectedValue={dogBreed}
        style={styles.picker}
        onValueChange={(itemValue) => setDogBreed(itemValue)}
      >
        <Picker.Item label="Labrador" value="labrador" />
        <Picker.Item label="German Shepherd" value="german_shepherd" />
        <Picker.Item label="Bulldog" value="bulldog" />
        <Picker.Item label="Beagle" value="beagle" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setDogGender('Boy')}>
          <Text style={[styles.checkbox, dogGender === 'Boy' && styles.selected]}>Boy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDogGender('Girl')}>
          <Text style={[styles.checkbox, dogGender === 'Girl' && styles.selected]}>Girl</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ageContainer}>
        <TouchableOpacity onPress={() => setDogAge(Math.max(1, dogAge - 1))}>
          <Text style={styles.ageButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.ageText}>{dogAge} years</Text>
        <TouchableOpacity onPress={() => setDogAge(dogAge + 1)}>
          <Text style={styles.ageButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%', // Use percentage for responsiveness
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkbox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: '#ADD8E6',
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ageButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  ageText: {
    fontSize: 18,
  },
});

export default LoginScreen;
