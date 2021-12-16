import React from 'react';
import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';
import Colors from 'assets/Colors';
import PropTypes from 'prop-types';
import Fonts from 'assets/Fonts';

const TextInput = props => {
  const {onChangeText, value, placeholder, keyboardType, style, ...restProps} =
    props;
  return (
    <View style={styles.container}>
      <RNTextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...restProps}
      />
    </View>
  );
};

TextInput.propTypes = {
  keyboardType: PropTypes.oneOf(['numeric']).isRequired,
};
export default TextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: Colors.secondaryColor,
    fontSize: 18,
    fontFamily: Fonts.Regular,
  },
});
