import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

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
