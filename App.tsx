/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Animated,
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const blessings = {
  rabbit: [
    '鴻兔大展',
    '兔氣揚眉',
    '奮發兔強',
    '玉兔臨風',
    '玉兔迎春',
    '福兔迎祥',
    '兔來運轉',
    '動如脫兔',
    '金兔報喜',
    '兔躍新程',
    '兔年吉祥',
    '兔肥屋潤',
  ],
  elder: [
    '富貴有餘',
    '福壽雙全',
    '出入平安',
    '五福臨門',
    '福如東海',
    '壽比南山',
    '闔家安康',
    '龍馬精神',
    '神采奕奕',
    '兒孫滿堂',
    '歲歲平安',
    '平安健康',
    '福星高照',
    '延年益壽',
    '福壽安康',
  ],
  children: [
    '聰明伶俐',
    '快高長大',
    '學業進步',
    '學業有成',
    '日日開心',
    '笑口常開',
    '人見人愛',
    '茁壯成長',
    '歲歲平安',
    '平安快樂',
  ],
  collegues: [
    '好事連連',
    '時來運轉',
    '金玉滿堂',
    '團圓有餘',
    '年年有餘',
    '富貴有餘',
    '鴻圖大展',
    '步步高升',
    '年年高升',
    '飛黃騰達',
    '大發利市',
    '花開富貴',
    '開工大吉',
    '福壽雙全',
    '財源滾滾',
    '財源廣進',
    '健康如意',
  ],
  general: [
    '恭喜發財',
    '恭賀新禧',
    '吉祥如意',
    '心想事成',
    '事事如意',
    '萬事如意',
    '閤家平安',
    '大吉大利',
    '開春大吉',
    '迎春納福',
    '青春常駐',
    '健康團圓',
    '健康平安',
    '甜甜蜜蜜',
    '春風得意',
  ],
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let [openPocket, setOpenPocket] = useState('closed');
  const pocketTopValue = {
    rotateValue: new Animated.Value(0),
    translateY: new Animated.Value(0),
  };

  // take ref to existing pocket
  // const openValue = useRef(new Animated.Value(0)).current;

  let pressOpen = (event: GestureResponderEvent) => {
    setOpenPocket('opening');
    Animated.parallel([
      Animated.timing(pocketTopValue.rotateValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pocketTopValue.translateY, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressOpen}>
        <View style={styles.redPocket}>
          <Animated.View
            style={{
              transform: [
                {
                  rotateX: pocketTopValue.rotateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['180deg', '0deg'],
                  }),
                },
                {
                  translateY: pocketTopValue.translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [5, -100],
                  }),
                },
                ...styles.redPocketTopTransform.transform,
              ],
              ...styles.redPocketTop,
            }}></Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '5%',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  redPocket: {
    width: 350,
    height: '80%',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    position: 'relative',
  },
  redPocketTop: {
    width: 350,
    height: 100,
    position: 'absolute',
    backgroundColor: 'red',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  redPocketTopTransform: {
    transform: [{translateX: -5}],
  },
});

export default App;
