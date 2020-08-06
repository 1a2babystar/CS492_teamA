import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import colors from '../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const api = axios.create({
  baseURL: 'http://31dbfda3f3bf.ngrok.io/',
});

export default class SelectScreen extends React.Component {
  constructor() {
    super();
    api
      .get('media/', {
        data: {
          uid: 'Seunghyuk',
          rid: '452637',
          request: 'result',
          filename: 'output.mp4',
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  state = {
    ImageSource: null,
    videoSource: null,
  };

  selectImage = async () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo'},
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            ImageSource: response.uri,
          });
        }
      },
    );
  };

  selectVideo = async () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'video'},
      (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            VideoSource: response.uri,
          });
        }
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}>
          <View style={styles.titleBar}>
            <Ionicons name="chevron-back" size={28} color="#52575D" />
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.select,
            {borderBottomColor: this.state.color},
          ]}>
          {this.state.ImageSource && (
            <Image
              source={{uri: this.state.ImageSource}}
              style={{width: '80%', height: 200, resizeMode: 'contain'}}
            />
          )}
          <TouchableOpacity
            style={[styles.selectbutton, {backgroundColor: this.state.color}]}
            onPress={this.selectImage}>
            <Entypo name="image" size={24} color={colors.blue} />
            <Text style={{color: colors.blue, marginHorizontal: 10}}>
              Select Image
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.section,
            styles.select,
            {borderBottomColor: this.state.color},
          ]}>
          {this.state.VideoSource && (
            <Video
              source={this.state.videoSource}
              style={{width: '80%', height: 200, resizeMode: 'contain'}}
            />
          )}
          <TouchableOpacity
            style={[styles.selectbutton, {backgroundColor: this.state.color}]}
            onPress={this.selectVideo}>
            <Entypo name="video" size={24} color={colors.blue} />
            <Text style={{color: colors.blue, marginHorizontal: 10}}>
              Select Video
            </Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView style={[styles.section, styles.footer]}>
          <TextInput
            style={[styles.input, {borderColor: this.state.color}]}
            placeholder="Comments"
          />
          <TouchableOpacity
            style={[styles.button, {backgroundColor: this.state.color}]}
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}>
            <Text style={{color: colors.blue}}>Convert</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
  },
  backbutton: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  select: {
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
    height: 48,
    width: '70%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    height: 48,
    borderColor: colors.blue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
