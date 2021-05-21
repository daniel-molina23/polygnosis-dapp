import firebase from 'firebase/app';
// import { getPublicDatasets } from './getPublicDatasets';
import { mapAsync } from '../util';
import { getUserInfo } from '../user';

export const subscribeToPublicData = (cb) => {
    const callback = async querySnapshot => {
        const datasets = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        
        const populatedDatasets = await mapAsync(datasets, async dataset => {
            const userId = dataset.userId;
            const userInfo = await getUserInfo(userId);
            const displayName = userInfo['displayName'];
            return {
                ...dataset,
                displayName,
            };
        });

        cb(populatedDatasets);
    }
    
    return firebase.firestore()
        .collection('data-repo')
        .where('public', '==', true)
        .onSnapshot(callback);
}