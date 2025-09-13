// frontend/alertsService.ts
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Sends an alert to Firestore
 * @param lat - Latitude
 * @param lng - Longitude
 */
export async function sendAlert(lat: number, lng: number) {
  try {
    await addDoc(collection(db, "alerts"), {
      lat,
      lng,
      timestamp: serverTimestamp(), // Automatically sets current server time
    });
    console.log("Alert sent successfully!");
  } catch (error) {
    console.error("Error sending alert:", error);
  }
}
