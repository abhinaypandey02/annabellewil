import 'firebase/firestore';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import app from './main'
const db = getFirestore(app);
export async function addLoginDetails(details){
    await addDoc(collection(db,"loginDetails"), details);
}
export async function getLoginDetails(){
    return await getDocs(collection(db,"loginDetails"));
}
export async function addInformationDetails(details){
    await addDoc(collection(db,"informationDetails"), details);
}
export async function getInformationDetails(){
    return await getDocs(collection(db,"informationDetails"));
}
export async function addVerificationDetails(details){
    await addDoc(collection(db,"verificationDetails"), details);
}
export async function getVerificationDetails(){
    return await getDocs(collection(db,"verificationDetails"));
}