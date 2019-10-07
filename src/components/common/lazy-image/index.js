import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import { Small, Original } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const AnimatedOriginal = Animated.createAnimatedComponent(Original);

function LazyImage({
  smallSource,
  source,
  shouldLoad,
  navigation,
  movieId,
  touchable
}) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  function handleDetails(id) {
    navigation.navigate("details", { id });
  }

  return (
    <Small source={smallSource} resizeMode="contain" blurRadius={2}>
      {loaded & touchable ? (
        <TouchableOpacity onPress={() => handleDetails(movieId)}>
          <AnimatedOriginal
            style={{ opacity }}
            source={source}
            resizeMode="contain"
            onLoadEnd={handleAnimate}
          />
        </TouchableOpacity>
      ) : (
        <AnimatedOriginal
          style={{ opacity }}
          source={source}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}

export default withNavigation(LazyImage);
