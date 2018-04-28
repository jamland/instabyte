import React from 'react';
import {connect} from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as HomeActions from '../actions/Home.actions';

import Feed from '../components/Home/Feed';
import Logo from '../../assets/images/logo.png';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: <Image
            style={{width: 100, height: 40,}}
            source={Logo}
           />,
  };

  constructor(props) {
    super(props);
    this.props.fetchHomeData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Feed />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData: () => dispatch(HomeActions.fetchHomeData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
