import { db } from "@/firebase";
import type { ImagingRecord } from "@/types/Imaging";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

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
    console.log("Document Updated");
  } catch (error) {
    console.error("Error updating order: ", error);
    throw error;
  }
};
