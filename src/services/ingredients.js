import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const ingredientsRef = collection(db, "ingredients");

// 🔹 CREATE
export const addIngredient = async (ingredient) => {
  const docRef = await addDoc(ingredientsRef, ingredient);
  return docRef.id;
};

// 🔹 READ
export const getAllIngredients = async () => {
  const snapshot = await getDocs(ingredientsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 🔹 UPDATE
export const updateIngredient = async (id, updates) => {
  const docRef = doc(db, "ingredients", id);
  await updateDoc(docRef, updates);
};

// 🔹 DELETE
export const deleteIngredient = async (id) => {
  const docRef = doc(db, "ingredients", id);
  await deleteDoc(docRef);
};
