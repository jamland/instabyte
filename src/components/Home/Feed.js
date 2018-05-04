import React from 'react';
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import * as HomeActions from '../../actions/Home.actions';

import FeedPost from './FeedPost';
import {colors} from '../../config/Theme';

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItem = (item) => {
    return (
      <FeedPost
        data={item}
        users={this.props.users}
        currentUser={this.props.currentUser}
      />
    )
  }

  _keyExtractor = (item, index) => `feedPost-${uuidv4()}`;

  render() {
    const { loading, feed } = this.props;

    if (loading) return (
      <View style={styles.containerFull}>
        <ActivityIndicator
          size="large"
          color={colors.tintColor}
        />
      </View>
    )

    if (feed === null || feed.length === 0) return (
      <View style={styles.containerFull}>
        <Text>No posts yet</Text>
      </View>
    )

    return (
      <FlatList
        style={styles.container}
        data={feed}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={this._keyExtractor}
        currentUser={this.props.currentUser}
        users={this.props.users}
      >
      </FlatList>
    );
  }

}

const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});


const mapStateToProps = (state) => ({
  feed: state.feed.data,
  users: state.users.data,
  loading: state.app.loading,
  currentUser: state.profile.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
