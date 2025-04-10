import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const mealRef = collection(db, "meals");

export const addMeal = async (meal) => {
    const docRef = await addDoc(mealRef, meal);
    return docRef.id;
};

export const getAllMeals = async () => {
    const snapshot = await getDocs(mealRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateMeal = async (id, updates) => {
    const docRef = doc(db, "meals", id);
    await updateDoc(docRef, updates);
};

export const deleteMeal = async (id) => {
    const docRef = doc(db, "meals", id);
    await deleteDoc(docRef);
};