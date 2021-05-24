import firebase from 'firebase/app';
import { getCurrentUser } from '../auth';


export const uploadDatasetForCurrentUser = async (newDocument) => {
    try {
        const currentUser = getCurrentUser();

        if(!currentUser) return;

        
        //add the userId for reference!
        const body = {
            ...newDocument,
            userId: currentUser.id,
        }

        //.add(...) and .doc().set(...) are completely equivalent
        await firebase.firestore()
            .collection('data-repo')
            .doc()
            .set(body);

    } catch(e){
        throw new Error(e.message);
    }
}