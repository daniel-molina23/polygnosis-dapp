import firebase from 'firebase/app';
import { getCurrentUser } from '../auth';

export const getCurrentUserDatasets = async () => {
    const currentUser = getCurrentUser();

    if(!currentUser) return null;

    const userId = currentUser.id;

    const querySnapshot = await firebase.firestore()
        .collection('data-repo')
        .where('userId','==', userId)
        .get();

    
    const currentUserDatasets = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));

    return currentUserDatasets;
}