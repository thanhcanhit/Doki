import { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { Play } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const handleTap = () => {
    if (status && status.isLoaded && status.isPlaying) {
      video.current?.pauseAsync();
    } else {
      video.current?.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Play className="fixed" />
      <TouchableWithoutFeedback onPress={handleTap}>
        <Video
          ref={video}
          style={styles.video}
          source={require("/assets/videos/demo_video.mp4")}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN} // Equivalent to object-fit: contain
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) =>
            setStatus(status)
          }
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: width,
    height: height,
    backgroundColor: "black", // Ensures black background for letterboxing effect
  },
});
