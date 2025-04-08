import { View, Image, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const [showLogo, setShowLogo] = useState(false);
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLogo(true);
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, 2200); // após animação Lottie

    const timer2 = setTimeout(() => {
      router.replace('/recipes');
    }, 4000); // transição após logo

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <View style={styles.container}>
      {!showLogo ? (
        <LottieView
          source={require('../assets/splash.json')} // sua animação .json aqui
          autoPlay
          loop={false}
          style={styles.lottie}
        />
      ) : (
        <Animated.Image
          source={require('../assets/logo-white.png')} // logo da marca
          style={[styles.logo, { opacity: logoOpacity }]}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff642c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 220,
    height: 220,
  },
});
