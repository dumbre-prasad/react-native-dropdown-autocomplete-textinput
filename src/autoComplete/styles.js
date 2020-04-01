import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  suggestionArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 9999,
    borderRadius: 2,
    shadowColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 15,
    backgroundColor: 'white',
  },
  suggestionElementView: {
    backgroundColor: 'white',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 14,
    paddingBottom: 14,
    width: '100%',
  },
  suggestionItem: {
    color: 'black',
  },
}),
defaultAccentColor = '#034EA2',
heightTopThreshold = 70,
heightBottomThreshold = 70,
openedKeyboardHeight = 541.59619140625



