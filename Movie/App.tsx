/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} />
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={{
              width: 16,
              height: 16,
              position: 'absolute',
              left: 0,
              marginLeft: 16,
            }}
            source={require('./Img/z4515944179747_11a05fc358373e7ffd5ba32a44bb2283.jpg')}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Missions
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: 100,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  borderWidth: 2,
                  borderColor: 'rgb(177 157 255)',
                }}
                source={require('./Img/background.jpg')}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  DAILY LOGIN
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 12,
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  marginBottom: 6,
                  fontWeight: '600',
                }}>
                Login Counter
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  padding: 12,
                  borderRadius: 20,
                  borderColor: 'rgb(177 157 255)',
                }}>
                <Text style={{fontSize: 12, color: 'black', fontWeight: '800'}}>
                  1 day streak
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 10, height: 10}}
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                  />
                  <Text style={{marginLeft: 5}}>1</Text>
                </View>
                <View style={{marginHorizontal: 8}}>
                  <Image
                    style={{width: 50, height: 46}}
                    resizeMode="center"
                    source={require('./Img/z4515934701893_6ec51008d2f975656036490dfae181f6.jpg')}
                  />
                </View>
              </View>
              <View style={{marginHorizontal: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 10, height: 10}}
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                  />
                  <Text style={{marginLeft: 5}}>1</Text>
                </View>
                <View>
                  <Image
                    style={{width: 50, height: 46}}
                    resizeMode="center"
                    source={require('./Img/z4515934914750_805ed4a8a9065d9e4fdb1d5830888167.jpg')}
                  />
                </View>
              </View>
              <View style={styles.groupIcon}>
                <View style={styles.topViewIcon}>
                  <Image
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                    style={{width: 10, height: 10}}
                  />
                  <Text style={styles.textNumber}>1</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainNumber}>3</Text>
                  <Image
                    source={require('./Img/z4515936440001_d612b778dceaa5292704340af12b9674.jpg')}
                    resizeMode="center"
                    style={{width: 50, height: 46}}
                  />
                </View>
              </View>
              <View style={styles.groupIcon}>
                <View style={styles.topViewIcon}>
                  <Image
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                    style={{width: 10, height: 10}}
                  />
                  <Text style={styles.textNumber}>1</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainNumber}>4</Text>
                  <Image
                    source={require('./Img/z4515936440001_d612b778dceaa5292704340af12b9674.jpg')}
                    resizeMode="center"
                    style={{width: 50, height: 46}}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12,
              }}>
              <View style={styles.groupIcon}>
                <View style={styles.topViewIcon}>
                  <Image
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                    style={{width: 10, height: 10}}
                  />
                  <Text style={styles.textNumber}>1</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainNumber}>5</Text>
                  <Image
                    source={require('./Img/z4515936440001_d612b778dceaa5292704340af12b9674.jpg')}
                    resizeMode="center"
                    style={{width: 50, height: 46}}
                  />
                </View>
              </View>
              <View style={styles.groupIcon}>
                <View style={styles.topViewIcon}>
                  <Image
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                    style={{width: 10, height: 10}}
                  />
                  <Text style={styles.textNumber}>1</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainNumber}>6</Text>
                  <Image
                    source={require('./Img/z4515936440001_d612b778dceaa5292704340af12b9674.jpg')}
                    resizeMode="center"
                    style={{width: 50, height: 46}}
                  />
                </View>
              </View>
              <View style={styles.groupIcon}>
                <View style={styles.topViewIcon}>
                  <Image
                    source={require('./Img/z4515938378528_17d4494c6500783e1661f43adc2d1cb4.jpg')}
                    style={{width: 10, height: 10}}
                  />
                  <Text style={styles.textNumber}>10</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainNumber}>7</Text>
                  <Image
                    source={require('./Img/z4515936440001_d612b778dceaa5292704340af12b9674.jpg')}
                    resizeMode="center"
                    style={{width: 50, height: 46}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#EBEBEB',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  content: {
    backgroundColor: 'white',
    height: 363,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 12,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16
  },
  groupIcon: {
    marginHorizontal: 8,
  },
  topViewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumber: {
    marginLeft: 4,
  },
  textMainNumber: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    fontWeight: 'bold',
  },
});

export default App;
