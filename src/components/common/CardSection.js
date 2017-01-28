import React, { PropTypes } from 'react';
import { View } from 'react-native';

export const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
