import firebase from 'firebase/app';
// import { getPublicDatasets } from './getPublicDatasets';
// import { mapAsync } from '../util';

export const subscribeToUserData = (userId, cb) => {
    const callback = async querySnapshot => {
        const datasets = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        cb(datasets);   
    }

    return firebase.firestore()
        .collection('data-repo')
        .where('userId', '==', userId)
        .onSnapshot(callback);
}