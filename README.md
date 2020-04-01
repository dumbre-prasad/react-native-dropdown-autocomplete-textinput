# React Native Autocomplete Textinput

Simple cross platform (Android/iOS) searchable and scrollable dropdown autocomplete textinput for React Native App!

## Features
- Optimised stateless component
- Scroll to load flatlist
- Floating dropdown options

## Installation

```
npm i react-native-dropdown-autocomplete-textinput --save
```

<!--
## Usage
Require it inside your Javascript files. Also supporting components using object-deconstructing.
```Select``` ```Option``` ```OptionList```, Also a positioning utility method ```updatePosition```.

updatePosition should be called in ```componentDidMount``` with refs to the ```<Select />``` component and ```<OptionList />```.

This calculates component's PositionX and PositionY and sets it back into the component. The component uses it to position the ```<OptionList>``` using this co-ordinates. -->

## Examples

### Minimal example

```js
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';

<View>
  <Autocomplete
    data={DATA}
    displayKey="name"
    placeholder={'Placeholder1'}
    onSelect={value => console.log('value', value)}
  />
</View>;
```

### Using inside ScrollView with multiple Autocompletes

##### Note: When we want to use Autocomplete inside scrollable view we need to disable parent scroll when keyboard appears refer below code snippet 


```js
import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: true,
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, paddingTop: 70, backgroundColor: '#f0f0ef'}}>
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
  {code: 'AP', name: 'Andhra Pradesh'},
  {code: 'AR', name: 'Arunachal Pradesh'},
];
```

For complete implementation checkout app.js file.

### Required Props

| Property   | Type     | Default   | Description                                           |
| ---------- | -------- | --------- | ----------------------------------------------------- |
| data       | array    | []        | array of objects                                      |
| displayKey | string   | undefined | key of object to be displayed in the list             |
| onSelect   | function | undefined | callback funtion on selection returns selected object |

##### Optional Props:

| Property          | Type    | Default    | Description                                 |
| ----------------- | ------- | ---------- | ------------------------------------------- |
| placeholder       | string  | undefined  | placeholder string                          |
| placeholderColor  | string  | undefined  | placeholderColor string                     |
| isMandatory       | boolean | false      | shows astreisk in case of mandatory field   |
| maxHeight         | number  | undefined  | to set maximum height of dropdown list      |
| floatBottom       | boolean | false      | to always open dropdown below the textinput |
| editable          | boolean | true       | to disable input                            |
| dropDownIconColor | string  | undefinned | to change dropdown image color              |
| dropDownImage     | png     | undefined  | to set dropdown image                       |
| textInputStyle    | object  | undefined  | For textinput styling                       |
| value             | object  | undefined  | Can be used in case of controlled component |

<!-- ## Demo

<p align="center">
    <img src ="https://raw.githubusercontent.com/alinz/react-native-dropdown/master/dropdown.gif" />
</p> -->
