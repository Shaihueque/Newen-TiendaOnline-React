import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"
import { app } from "./config";

const db = getFirestore(app);

// Obtengo todos los productos o filtrados por categoría 
export async function getProducts(categoryName) {
    const coleccionRef = collection(db, "products");

    try {
        // Si hay una categoría, aplico la query con array-contains.
        // Si categoryName es undefined (Inicio "/"), traigo la colección completa.
        const q = categoryName 
            ? query(coleccionRef, where("category", "array-contains", categoryName))
            : coleccionRef;

        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data()
        }));
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}

// Obtengo un solo producto por ID para la vista de detalle
export async function getProductById(id) {
    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
}

export async function createOrder(order) {
    try{
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Documento creado correctamente con ID:", docRef.id);
    }catch(error){
        console.error("Error al añadir el documento: ", error);
    }
}