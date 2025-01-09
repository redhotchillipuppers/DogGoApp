import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DogBreeds from '../../constants/DogBreeds'; 

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
      <View style={styles.formBox}>
        <Text style={styles.title}>Welcome to DogGo!</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#666"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#666"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Dog Name"
          placeholderTextColor="#666"
          value={dogName}
          onChangeText={setDogName}
        />
        <Picker
          selectedValue={dogBreed}
          style={styles.picker}
          onValueChange={(itemValue) => setDogBreed(itemValue)}
        >
        {DogBreeds.map((breed) => (
        <Picker.Item
              key={breed.value}
              label={breed.label}
              value={breed.value}
              color="#333"
            />
          ))}
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

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange background (logo orange)
  },
  formBox: {
    width: '90%',
    padding: 20,
    backgroundColor: '#F9F6EE', // Off-white background for the form
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#333', // Input text color
  },
  picker: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  checkbox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    color: '#333',
  },
  selected: {
    backgroundColor: '#ADD8E6',
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  ageButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  ageText: {
    fontSize: 18,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#FFA500', // Orange (logo orange)
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
