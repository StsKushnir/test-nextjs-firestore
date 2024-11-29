import { db } from "../firebase";
import { addDoc, collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { List } from "@/types/interfaces";

export const getListById = async (id: string): Promise<List> => {
  const listRef = doc(db, "lists", id);
  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data) {
      return {
        id: docSnap.id,
        name: data.name,
      };
    }
  }
  throw new Error("List not found");
};

export const getLists = async (): Promise<List[]> => {
  const listsRef = collection(db, "lists");
  const snapshot = await getDocs(listsRef);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
    };
  });
};

export const addList = async (name: string): Promise<void> => {
  const listsRef = collection(db, "lists");
  await addDoc(listsRef, { name });
};

export const deleteList = async (id: string): Promise<void> => {
  const listRef = doc(db, "lists", id);
  await deleteDoc(listRef); 
};
