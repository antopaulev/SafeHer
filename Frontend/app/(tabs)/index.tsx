// // import { Image } from 'expo-image';
// // import { Platform, StyleSheet } from 'react-native';
// // import { db } from "../../firebase"; // adjust path if needed


// // import { HelloWave } from '@/components/hello-wave';
// // import ParallaxScrollView from '@/components/parallax-scroll-view';
// // import { ThemedText } from '@/components/themed-text';
// // import { ThemedView } from '@/components/themed-view';
// // import { Link } from 'expo-router';

// // export default function HomeScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// //       headerImage={
// //         <Image
// //           source={require('@/assets/images/partial-react-logo.png')}
// //           style={styles.reactLogo}
// //         />
// //       }>
// //       <ThemedView style={styles.titleContainer}>
// //         <ThemedText type="title">Welcome!</ThemedText>
// //         <HelloWave />
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// //         <ThemedText>
// //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// //           Press{' '}
// //           <ThemedText type="defaultSemiBold">
// //             {Platform.select({
// //               ios: 'cmd + d',
// //               android: 'cmd + m',
// //               web: 'F12',
// //             })}
// //           </ThemedText>{' '}
// //           to open developer tools.
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <Link href="/modal">
// //           <Link.Trigger>
// //             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// //           </Link.Trigger>
// //           <Link.Preview />
// //           <Link.Menu>
// //             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
// //             <Link.MenuAction
// //               title="Share"
// //               icon="square.and.arrow.up"
// //               onPress={() => alert('Share pressed')}
// //             />
// //             <Link.Menu title="More" icon="ellipsis">
// //               <Link.MenuAction
// //                 title="Delete"
// //                 icon="trash"
// //                 destructive
// //                 onPress={() => alert('Delete pressed')}
// //               />
// //             </Link.Menu>
// //           </Link.Menu>
// //         </Link>

// //         <ThemedText>
// //           {`Tap the Explore tab to learn more about what's included in this starter app.`}
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// //         <ThemedText>
// //           {`When you're ready, run `}
// //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// //         </ThemedText>
// //       </ThemedView>
// //     </ParallaxScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   titleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// //   stepContainer: {
// //     gap: 8,
// //     marginBottom: 8,
// //   },
// //   reactLogo: {
// //     height: 178,
// //     width: 290,
// //     bottom: 0,
// //     left: 0,
// //     position: 'absolute',
// //   },
// // });

// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
// import * as Location from "expo-location";
// import { db } from "../../firebase"; // adjust path if needed
// import { collection, addDoc } from "firebase/firestore";

// export default function HomeScreen() {
//   const [status, setStatus] = useState("Press the button to send SOS");
//   const [loading, setLoading] = useState(false);

//   const sendSOS = async () => {
//     try {
//       setLoading(true);
//       setStatus("Getting location...");

//       // Ask for permission
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setStatus("Permission denied. Enable location services.");
//         setLoading(false);
//         return;
//       }

//       // Get location
//       const location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;

//       // Save to Firestore
//       await addDoc(collection(db, "alerts"), {
//         lat: latitude,
//         lng: longitude,
//         timestamp: Date.now(),
//       });

//       setStatus(`🚨 SOS sent!\nLat: ${latitude}\nLng: ${longitude}`);
//       Alert.alert("SOS Sent", "Your location has been shared!");
//     } catch (error) {
//       console.error(error);
//       setStatus("❌ Error sending SOS");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.status}>{status}</Text>

//       <TouchableOpacity
//         style={styles.sosButton}
//         onPress={sendSOS}
//         disabled={loading}
//       >
//         {loading ? (
//           <ActivityIndicator color="white" size="large" />
//         ) : (
//           <Text style={styles.sosText}>🚨 SOS</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   status: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   sosButton: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
//   sosText: {
//     fontSize: 36,
//     fontWeight: "bold",
//     color: "white",
//   },
// });


import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import * as Location from "expo-location";
// import { sendAlert } from "../../alertsService"; // import the helper function
import { sendAlert } from "@/alertsServices";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [status, setStatus] = useState("Press the button to send SOS");
  const [loading, setLoading] = useState(false);

  const sendSOS = async () => {
    try {
      setLoading(true);
      setStatus("Getting location...");

      // Ask for permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setStatus("Permission denied. Enable location services.");
        setLoading(false);
        return;
      }

      // Get location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Use alertsService to send to Firestore
      await sendAlert(latitude, longitude);

      setStatus(`🚨 SOS sent!\nLat: ${latitude}\nLng: ${longitude}`);
      Alert.alert("SOS Sent", "Your location has been shared!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending SOS");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={sendSOS}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" size="large" />
        ) : (
          <Text style={styles.sosText}>🚨 SOS</Text>
        )}
      </TouchableOpacity>

      <Link href="/MapViewer" style={styles.mapLink}>
        View Map
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 20 },
  status: { fontSize: 16, textAlign: "center", marginBottom: 30 },
  sosButton: { width: 200, height: 200, borderRadius: 100, backgroundColor: "red", alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 8 },
  sosText: { fontSize: 36, fontWeight: "bold", color: "white" },
  mapLink: { marginTop: 40, fontSize: 18, color: "blue", textDecorationLine: "underline" },
});

