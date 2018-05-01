import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-material-textfield';
import {colors} from '../../config/Theme';
import * as ProfileActions from '../../actions/Profile.actions';

class EditProfileForm extends Component {
  state = {
    profileData: {
      name: '',
      username: '',
      details: '',
    }
  };

  componentDidMount () {
    const {user} = this.props;

    this.setState({
      profileData: {
        name: user.name,
        username: user.username,
        details: user.details,
      },
    });
  }

  updateForm = (name, value) => {
    const updatedProfileState = {
      ...this.state.profileData,
      [name]: value,
    }

    this.setState({
      profileData: updatedProfileState,
    });

    // copy data to store so it can be saved from react navigation header
    this.props.updateProfileFormData(this.state.profileData);
  }

  render() {
    return (
      <View style={styles.container}>

        <KeyboardAwareScrollView style={styles.container} >

          <View
            style={styles.form}
          >
            <ScrollView style={styles.formScroll}>

              <TextField
                returnKeyType='done'
                style={styles.textField}
                label="Name"
                value={this.state.profileData.name}
                onChangeText={ (name) => this.updateForm('name', name) }
                autoCorrect={false}
                {...textFieldProps}
              />

              <TextField
                returnKeyType='done'
                style={styles.textField}
                label="Username"
                value={this.state.profileData.username}
                onChangeText={ (username) => this.updateForm('username', username) }
                autoCorrect={false}
                {...textFieldProps}
              />

              <TextField
                returnKeyType='done'
                style={styles.textField}
                label="Bio"
                value={this.state.profileData.details}
                onChangeText={ (details) => this.updateForm('details', details) }
                autoCorrect={false}
                {...textFieldProps}
              />
            </ScrollView>
          </View>

        </KeyboardAwareScrollView>

      </View>
    );
  }
}

const textFieldProps = {
  textColor: colors.text,
  baseColor: colors.inputLabel,
  tintColor: colors.anchor,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textField: {
    fontSize: 16,
    width: '100%',
    flex: 1,
  },
  formScroll: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
  },
});


const mapStateToProps = (state) => ({
  user: state.profile.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfileFormData: (data) => dispatch(ProfileActions.updateProfileFormData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
