import firebase from "./firebase";
import {Todo} from "./store/TodoStore";

const db = firebase.firestore();
const todosRef = db.collection("todo");

export async function getTodos() {
    const data = [];
    await todosRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id;
            data.push(new Todo(obj));
        });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
    return data;
}

export async function addTodo(data) {
    await todosRef.add(data).then((docRef) => {
        data.id = docRef.id;
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
    return data;
}

export async function deleteTodo(id) {
    await todosRef.doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export async function editTodo(id, data) {
    await todosRef.doc(id).set(data).then(() => {
        console.log("Document successfully updated!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}