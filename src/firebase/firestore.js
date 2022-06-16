import 'firebase/firestore';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from './main'
const db = getFirestore(app);
export async function addLoginDetails(details){
    await addDoc(collection(db,"loginDetails"), details);
}
export async function addInformationDetails(details){
    await addDoc(collection(db,"informationDetails"), details);
}
export async function addVerificationDetails(details){
    await addDoc(collection(db,"verificationDetails"), details);
}