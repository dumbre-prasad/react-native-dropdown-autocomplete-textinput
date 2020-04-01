import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  FlatList,
  Keyboard,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {
  styles,
  defaultAccentColor,
  heightBottomThreshold,
  heightTopThreshold,
  openedKeyboardHeight,
} from './styles';

const defaultDropDownImage = require('../images/drop-down-arrow.png');

const AutoComplete = props => {
  const {
    data,
    displayKey,
    onSelect,
    textInputStyle,
    isMandatory,
    value,
    placeholder,
    placeholderColor = defaultAccentColor,
    maxHeight,
    floatBottom,
    editable = true,
    dropDownIconColor = defaultAccentColor,
    dropDownImage = defaultDropDownImage,
  } = props;

  const [filteredData, setFilteredData] = useState([]);
  const [mData, setMData] = useState([]);
  const [page, setPage] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const sugestionsListPos = useRef({});
  const newRef = useRef();

  const filterData = str => {
    const fData =
      data &&
      data.filter(
        e =>
          e[displayKey] &&
          e[displayKey].toUpperCase().includes(str.toUpperCase()),
      );
    setFilteredData(fData);
  };

  useEffect(() => {
    if (data && data.length > 0 && data[0] !== filterData[0]) {
      data.length > 0 && setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (!value || (Object.keys(value).length !== 0 && value !== selectedItem)) {
      setSelectedItem(value);
    }
  }, [value]);

  useEffect(() => {
    filteredData &&
      filteredData.length > 0 &&
      setMData(filteredData.slice(0, 10 * page));
  }, [filteredData, page]);

  const _handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSelection = item => {
    setShowSuggestions(false);
    Keyboard.dismiss();
    setSelectedItem(item);
    setTimeout(() => {
      onSelect && onSelect(item ? item : {});
    }, 0);
  };

  const handleOnFocus = () => {
    if (data && data.length > 0) {
      displaySuggestions(undefined);
    }
    if (selectedItem) {
      setSelectedItem(undefined);
    }
    setIsFocused(true);
  };

  const handleOnSubmitEditing = () => {
    setShowSuggestions(false);
    setTimeout(() => {
      onSelect && onSelect(undefined);
    }, 0);
  };

  const displaySuggestions = str => {
    newRef.current.measure((fx, fy, width, height, px, py) => {
      let elementHeight = height;
      let elementPosition = py;

      let spaceAboveElement = elementPosition;
      let spaceBelowElement =
        openedKeyboardHeight - (elementPosition + elementHeight);
      sugestionsListPos.current = {
        top: elementHeight,
        maxHeight: maxHeight || spaceBelowElement - heightBottomThreshold,
      };

      if (
        !floatBottom &&
        spaceAboveElement - heightTopThreshold >
          spaceBelowElement - heightBottomThreshold
      ) {
        sugestionsListPos.current = {
          bottom: elementHeight,
          maxHeight: maxHeight || spaceAboveElement - heightTopThreshold,
        };
      }
      if (str) {
        filter;
      } else {
        setShowSuggestions(true);
      }
    });
  };
  return (
    <View style={[{width: '100%'}, textInputStyle]}>
      <Text
        style={{
          marginBottom: '-2%',
          marginLeft: '0.7%',
          color: placeholderColor,
        }}>
        {placeholder}
        {isMandatory && (
          <Text title style={{color: 'red'}}>
            {' '}
            *
          </Text>
        )}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TextInput
          ref={newRef}
          {...props}
          placeholder={''}
          onSubmitEditing={handleOnSubmitEditing}
          style={{
            width: '100%',
            paddingRight: 12,
            color: !editable ? '#6c6c6c' : '#4B5258',
            borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
            borderBottomColor: '#C7C1CB',
            marginTop: Platform.OS === 'ios' ? "3%" : 0,
          }}
          value={
            selectedItem
              ? selectedItem[displayKey]
                ? selectedItem[displayKey]
                : undefined
              : undefined
          }
          onChangeText={data => filterData(data)}
          multiline={selectedItem ? true : false}
          onFocus={handleOnFocus}
          onBlur={() => setIsFocused(false)}
          clearTextOnFocus="true"
          underlineColorAndroid={isFocused ? defaultAccentColor : '#C7C1CB'}
        />

        <Image
          tintColor={dropDownIconColor}
          style={{
            height: 12,
            width: 12,
            marginLeft: '-6%',
            alignSelf: 'center',
          }}
          source={dropDownImage}
        />
      </View>

      {showSuggestions && (
        <View style={[styles.suggestionArea, sugestionsListPos.current]}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="always"
            initialNumToRender={10}
            onEndReached={_handleLoadMore}
            onEndReachedThreshold={0.5}
            data={mData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelection(item)}>
                <View style={[styles.suggestionElementView]}>
                  <Text caps style={[styles.suggestionItem]} numberOfLines={1}>
                    {item[displayKey]}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default AutoComplete;
