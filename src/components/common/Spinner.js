import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';


export const Spinner = ({ size }) => (
  <View style={styles.spinnerStyles}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Spinner;
