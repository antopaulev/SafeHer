// app/MapViewer.tsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import { db } from "../firebase"; // adjust if your firebase.ts path is different
import { db } from "@/firebase";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface AlertData {
  lat: number;
  lng: number;
  timestamp: any;
}

export default function MapViewer() {
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for alerts in real-time, ordered by latest first
    const q = query(collection(db, "alerts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: AlertData[] = snapshot.docs.map(doc => doc.data() as AlertData);
      setAlerts(data);
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading alerts...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: alerts[0]?.lat || 0,
        longitude: alerts[0]?.lng || 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {alerts.map((alert, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: alert.lat, longitude: alert.lng }}
          title="SOS Alert"
          description={`Sent at ${alert.timestamp?.toDate ? alert.timestamp.toDate().toLocaleString() : new Date().toLocaleString()}`}
          pinColor="red"
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});
