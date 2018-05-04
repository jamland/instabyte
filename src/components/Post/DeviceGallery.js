import React, { Component } from 'react';
import {
  Linking,
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  StyleSheet,
  CameraRoll,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Permissions } from 'expo';
import {Image as ImageWithCache} from "react-native-expo-image-cache";
import {colors} from '../../config/Theme';

import AvatarMask from '../../../assets/images/avatar-mask.png';

const win = Dimensions.get('window');

export default class DeviceGallery extends Component {
  state = {
    isMounted: false,
    photos: [],
    selectedItem: null,
    hasCameraRollPermission: null,
  }

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.setState({isMounted: true});

    const {status} = await Permissions.getAsync(Permissions.CAMERA_ROLL);

    if (this.state.isMounted) {
      this.setState({ hasCameraRollPermission: status === 'granted' });

      if (status === 'granted') {
        this.getPhotos();
      } else {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
          this.setState({ hasCameraRollPermission: true });
          this.getPhotos();
        }
      }
    }
  }

  componentWillUnmount(){
    this.setState({isMounted: false})
  }

  getPhotos = () => {
    if (this.state.hasCameraRollPermission) {
      CameraRoll.getPhotos({
        first: 20,
        assetType: 'All'
      })
      .then(r => {
        this.processImage(r.edges[0].node.image);
        this.setState({
          photos: r.edges,
          selectedItem: 0,
        });
      });
    }
  }

  selectItemHandler = (selectedItem = 0) => {
    this.processImage(this.state.photos[selectedItem].node.image);
    this.setState({
      selectedItem,
    });
  }

  processImage = (img) => {
    if (this.props.parentRoute === 'AvatarFromGallery') {
      this.props.setImageForAvatar(img);
    } else {
      this.props.setImageForPost(img);
    }
  }

  openSettings = () => {
    const url = 'app-settings:';
    Linking.openURL(url);
  }

  render() {
    const { photos, selectedItem, hasCameraRollPermission } = this.state;

    if (hasCameraRollPermission === null) {
      return null;
    }

    if (hasCameraRollPermission === false) {
      return (
        <View
          style={styles.deniedView}
        >
          <Text style={styles.deniedText}>Please enable permissions for accessing your device gallery.</Text>

          {Platform.OS === 'ios' &&
            <TouchableOpacity
              style={styles.openSettings}
              onPress={() => this.openSettings()}
            >
              <Text style={styles.openSettingsText}>Open Settings</Text>
            </TouchableOpacity>
          }
        </View>
      );
    }

    const showMask = this.props.parentRoute === 'AvatarFromGallery'
      ? true
      : false;

    const renderImages = photos.map( (image, index) => {
      const uri = image.node.image.uri;

      return (
        <TouchableHighlight
          key={index}
          style={styles.selectedItemBtn}
          onPress={() => this.selectItemHandler(index)}
        >
          <Image
            style={styles.galleryImage}
            source={{uri}}
          />
        </TouchableHighlight>
      )
    })

    return (
      <View
        style={styles.container}
      >

        <View style={styles.selectedItemView}>
          {selectedItem === null &&
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color={colors.primary}
            />
          }
          {selectedItem !== null &&
              <Image
                style={styles.selectedItem}
                source={{uri: photos[selectedItem].node.image.uri}}
              />
          }
          {selectedItem !== null && showMask &&
              <Image
                style={styles.avatarMast}
                source={AvatarMask}
              />
          }
        </View>

        <ScrollView>
          <View style={styles.gallery}>
            {renderImages}
          </View>
        </ScrollView>

      </View>
    );
  }
}

const galleryItemSize = (win.width / 4) - 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 1,
    flex: 1,
  },
  galleryImage: {
    height: galleryItemSize,
    width: galleryItemSize,
    alignSelf: 'stretch',
  },
  selectedItemView: {
    width: win.width,
    height: win.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItem: {
    width: win.width,
    height: win.width,
    alignSelf: 'stretch',
  },
  selectedItemBtn: {
    margin: 1,
  },
  loader: {
    position: 'absolute',
    zIndex: 3,
  },
  avatarMast: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: win.width,
    height: win.width,
    alignSelf: 'stretch',
    zIndex: 2,
    opacity: .5,
  },
  deniedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  deniedText: {
    fontSize: 16,
    color: colors.text,
  },
  openSettings: {
    marginTop: 20,
  },
  openSettingsText: {
    fontSize: 16,
    color: colors.anchor,
  }
});
