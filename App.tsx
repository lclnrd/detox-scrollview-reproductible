/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Item = ({item}: {item: number}) => (
  <View
    testID={`item-${item}`}
    style={{
      backgroundColor: item % 2 ? 'green' : 'yellow',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    }}>
    <Text style={{fontSize: 20}}>{item}</Text>
  </View>
);

const BottomView = () => {
  return (
    <View style={style.bottomView}>
      <Text style={style.bottomViewText}>Should "hide" elements</Text>
    </View>
  );
};

const style = StyleSheet.create({
  bottomView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  bottomViewText: {fontSize: 20},
});

function App(): React.JSX.Element {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <View style={{flex: 1}}>
      <ScrollView testID={'scrollview'}>
        {data.map(item => (
          <Item item={item} key={`item-${item}`} />
        ))}
      </ScrollView>
      <BottomView />
    </View>
  );
}

export default App;
