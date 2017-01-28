import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonStyle}
  >
    <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
