import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  StyleSheet,
  CameraRoll,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {Image as ImageWithCache} from "react-native-expo-image-cache";
import {colors} from '../../config/Theme';

const win = Dimensions.get('window');

export default class DeviceGallery extends Component {
  state = {
    photos: [],
    selectedItem: null,
  }

  constructor(props) {
    super(props);
    this.getPhotos();
  }


  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => {
      this.props.setImageForPost(r.edges[0].node.image);
      this.setState({
        photos: r.edges,
        selectedItem: 0,
      });
    })
  }

  selectItemHandler = (selectedItem = 0) => {
    this.props.setImageForPost(this.state.photos[selectedItem].node.image);
    this.setState({
      selectedItem,
    });
  }

  render() {
    const { photos, selectedItem } = this.state;

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
      <View style={styles.container}>

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
});
