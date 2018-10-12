import * as React from 'react';
import {View, Text,StyleSheet} from 'react-360';
import {connect} from './Store';

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class TopView extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.name}>Hello from Top</Text>
        </View>
      </View>
    );
  }
}

const ConnectedModelView = connect(TopView);

export default ConnectedModelView;
const styles = StyleSheet.create({
  wrapper: {
    width: 400,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  name: {
    fontSize: 50,
    textAlign: 'center',
  },
  author: {
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
});