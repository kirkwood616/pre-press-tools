import { db } from "@/firebase";
import type { ImagingRecord } from "@/types/Imaging";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const getAllRecords = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "imaging"));
    const records = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return records;
  } catch (error) {
    console.error("Error fetchings records", error);
    throw error;
  }
};

export const updateOrderRecord = async (
  orderId: string,
  updatedOrder: ImagingRecord
) => {
  try {
    const docRef = doc(db, "imaging", orderId);
    await setDoc(docRef, updatedOrder);
  } catch (error) {
    console.error("Error updating order: ", error);
    throw error;
  }
};

export const updateRecordLock = async (
  orderId: string,
  isLockedValue: boolean
) => {
  try {
    const docRef = doc(db, "imaging", orderId);
    await updateDoc(docRef, { isLocked: isLockedValue });
  } catch (error) {
    console.error("Error updating locked status: ", error);
    throw error;
  }
};

export const addNewOrderRecord = async (newOrder: ImagingRecord) => {
  try {
    const docRef = await addDoc(collection(db, "imaging"), newOrder);
    console.log("Document added w/ ID: ", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
