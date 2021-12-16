import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from 'components/TextInput';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import Colors from '../assets/Colors';
import Fonts from '../assets/Fonts';

const InputBox = props => {
  const {
    label,
    onChangeValue,
    value,
    placeholder,
    keyboardType,
    inputType,
    minimumValue,
    maximumValue,
    step,
    valueDisplayText,
    maxLength,
  } = props;

  const renderInput = () => {
    switch (inputType) {
      case 'textInput':
        return (
          <TextInput
            onChangeText={onChangeValue}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
          />
        );
      case 'slideBar':
        return (
          <View style={{paddingVertical: 10}}>
            <Text style={styles.label}>{valueDisplayText ? valueDisplayText : value}</Text>
            <Slider
              value={value}
              step={step}
              onValueChange={onChangeValue}
              thumbTintColor={Colors.secondaryColor}
              minimumTrackTintColor={Colors.primaryColor}
              maximumTrackTintColor={Colors.secondaryLightColor}
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
              minimumValue={minimumValue}
              maximumValue={maximumValue}
            />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf(['textInput', 'slideBar']).isRequired,
  keyboardType: PropTypes.oneOf(['numeric']),
  onChangeValue: PropTypes.func,
  minimumValue: PropTypes.number,
  maximumValue: PropTypes.number,
  step: PropTypes.number,
  valueDisplayText: PropTypes.string,
};
export default InputBox;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.secondaryColor,
    marginBottom: 5,
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d5d8e8',
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
