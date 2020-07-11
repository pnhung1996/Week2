import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const listData = [
  {
    "key": 1,
    "imagePath": require('./assets/39332.jpg'),
    "likeCount": 11
  },
  {
    "key": 2,
    "imagePath": require('./assets/2b2835314a793c20412a2174b978c6b9.jpg'),
    "likeCount": 12
  },
  {
    "key": 3,
    "imagePath": require('./assets/88e1701f41b81af3186ed1b1480e22db.jpg'),
    "likeCount": 500
  },
  {
    "key": 4,
    "imagePath": require('./assets/57699.jpg'),
    "likeCount": 200
  },
  {
    "key": 5,
    "imagePath": require('./assets/394181.jpg'),
    "likeCount": 110
  },
  {
    "key": 6,
    "imagePath": require('./assets/hg-gundam-marchosias-4.jpg'),
    "likeCount": 11
  },
  {
    "key": 7,
    "imagePath": require('./assets/6952286-raiden-metal-gear-rising.jpg'),
    "likeCount": 12
  },
  {
    "key": 8,
    "imagePath": require('./assets/702226.jpg'),
    "likeCount": 500
  },
  {
    "key": 9,
    "imagePath": require('./assets/c28f7793413277e69b1d41cbf236ddcc.jpg'),
    "likeCount": 200
  },
  {
    "key": 10,
    "imagePath": require('./assets/devil-may-cry-5-3840x2160-nero-4k-14497.jpg'),
    "likeCount": 110
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/39332.jpg')} style={styles.avatarStyle} />
        <View style={styles.nameContainer}>
          <Text style={styles.nameStyle}>Phung Nghia Hung</Text>
          <Text style={styles.jobStyle}>DEV</Text>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.textFollowStyle}>
                Follow
                </Text>
            </TouchableOpacity>
            <View style={styles.sendStyles}>
              <Feather name="send" size={23} color="#ffff" />
            </View>

          </View>
        </View>
      </View>
      <View style={styles.inforContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.nameStyle}>210</Text>
          <Text style={styles.jobStyle}>Photos</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.nameStyle}>15k</Text>
          <Text style={styles.jobStyle}>Followers</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.nameStyle}>660</Text>
          <Text style={styles.jobStyle}>Followings</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          renderItem={({ item, index })=>{
            return(
              <View style = {styles.listItem}>
                <Image source = {item.imagePath} style = {styles.imageStyle}/>
              </View>
            )
          }}
          numColumns={2}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
  inforContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    flexDirection: 'row',
    flex: 7,
    justifyContent: 'space-around'
  },
  avatarStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  followButton: {
    backgroundColor: 'rgb(71,113,246)',
    borderRadius: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  jobStyle: {
    fontSize: 13,
    color: "#d7d7df"
  },
  textFollowStyle: {
    color: "#ffff"
  },
  sendStyles: {
    backgroundColor: 'rgb(120,213,250)',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 1
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnStyle: {
    backgroundColor: 'yellow',
    borderRadius: 40,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem : {
    flexDirection : 'column',
    flex : 1,
    alignItems : 'center'
  }, 
  imageStyle : {
    margin : 5,
    resizeMode : 'cover',
    width : '95%',
    height : 200,
    borderRadius : 10
  }
});
