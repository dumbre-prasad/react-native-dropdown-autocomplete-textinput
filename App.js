import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Autocomplete from './src/autoComplete/Autocomplete';
console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: true
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 70,paddingHorizontal:20, backgroundColor:"#f0f0ef"}}>
        <ScrollView
          onKeyboardDidShow={() => this.setState({scroll: false})}
          onKeyboardDidHide={() => this.setState({scroll: true})}
          scrollEnabled={this.state.scroll}
          keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <Autocomplete
              data={DATA}
              displayKey="name"
              placeholder={'Placeholder1'}
              onSelect={value => console.warn('value', value)}
              maxHeight={200}
            />
            <View style={{marginTop: 200}}></View>
            <Autocomplete
              data={DATA}
              displayKey="name"
              placeholder={'Placeholder2'}
              isMandatory={true}
              onSelect={value => console.warn('value', value)}
            />
            <View style={{marginTop: 200}}></View>

            <Autocomplete
              data={DATA}
              displayKey="name"
              placeholder={'Placeholder3'}
              onSelect={value => console.warn('value', value)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const DATA = [
  {code: 'AN', name: 'Andaman and Nicobar Islands'},
  {code: 'AP', name: 'Andhra Pradesh'},
  {code: 'AR', name: 'Arunachal Pradesh'},
  {code: 'AS', name: 'Assam'},
  {code: 'BR', name: 'Bihar'},
  {code: 'CG', name: 'Chandigarh'},
  {code: 'CH', name: 'Chhattisgarh'},
  {code: 'DH', name: 'Dadra and Nagar Haveli'},
  {code: 'DD', name: 'Daman and Diu'},
  {code: 'DL', name: 'Delhi'},
  {code: 'GA', name: 'Goa'},
  {code: 'GJ', name: 'Gujarat'},
  {code: 'HR', name: 'Haryana'},
  {code: 'HP', name: 'Himachal Pradesh'},
  {code: 'JK', name: 'Jammu and Kashmir'},
  {code: 'JH', name: 'Jharkhand'},
  {code: 'KA', name: 'Karnataka'},
  {code: 'KL', name: 'Kerala'},
  {code: 'LD', name: 'Lakshadweep'},
  {code: 'MP', name: 'Madhya Pradesh'},
  {code: 'MH', name: 'Maharashtra'},
  {code: 'MN', name: 'Manipur'},
  {code: 'ML', name: 'Meghalaya'},
  {code: 'MZ', name: 'Mizoram'},
  {code: 'NL', name: 'Nagaland'},
  {code: 'OR', name: 'Odisha'},
  {code: 'PY', name: 'Puducherry'},
  {code: 'PB', name: 'Punjab'},
  {code: 'RJ', name: 'Rajasthan'},
  {code: 'SK', name: 'Sikkim'},
  {code: 'TN', name: 'Tamil Nadu'},
  {code: 'TS', name: 'Telangana'},
  {code: 'TR', name: 'Tripura'},
  {code: 'UK', name: 'Uttarakhand'},
  {code: 'UP', name: 'Uttar Pradesh'},
  {code: 'WB', name: 'West Bengal'},
];
