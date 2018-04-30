import React from 'react';
import {
  Image,
} from 'react-native';
import {Image as ImageWithCache} from "react-native-expo-image-cache";

const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAAH6Nf8rAAAABGdBTUEAALGPC/xhBQAAAD9JREFUGBlj/A8EDEDABCLAACQC5jHC5EDCcA5cIZwBl4Loh5BwWWRB4lVi1U68IFaLkF0CY2M1EiaJTA+gQgApmhwFHvIPpAAAAABJRU5ErkJggg==" };

const ImageComponent = (props) => {
  const remoteFile = props.uri.startsWith('http')
    ? true
    : false;

  if (remoteFile) {
    return (
      <ImageWithCache
        {...props}
        {...{preview, uri: props.uri}}
      />
    );
  }
  else {
    return (
      <Image
        {...props}
        source={{uri: props.uri}}
      />
    );
  }
}

export default ImageComponent;
