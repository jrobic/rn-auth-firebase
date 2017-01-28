import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

export const Header = ({ headerText }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textSyle}>{headerText}</Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

const styles = {
  viewStyle: {
    paddingTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    zIndex: 5,
    /**
     * Android Only
     * Sets the elevation of a view, using Android's underlying elevation API.
     * This adds a drop shadow to the item and affects z-order for overlapping views.
     * Only supported on Android 5.0+, has no effect on earlier versions.
     */
    elevation: 2,
    position: 'relative',
  },
  textSyle: {
    fontSize: 20,
  },
};

export default Header;
