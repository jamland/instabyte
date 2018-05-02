import React from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import FeedPost from './FeedPost';
import {colors} from '../../config/Theme';

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

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

    const renderPosts = feed.map((item, index) => {
      return (
        <FeedPost
          data={item}
          users={this.props.users}
          key={index}
        />
      )
    })

    return (
      <ScrollView style={styles.container}>

          {renderPosts}

      </ScrollView>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(HomeActions.fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
