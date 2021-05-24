import firebase from 'firebase/app';
import { mapAsync } from '../util';
import { getUserInfo } from '../user';

export const getPublicDatasets = async () => {
    const querySnapshot = await firebase.firestore()
        .collection('data-repo')
        .where('isPublic','==', true)
        .limit(20)
        .get();

    const publicDatasets = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));

    const populatedDatasets = await mapAsync(publicDatasets, async dataset => {
        const author = await getUserInfo(dataset.userId);
        return {
            ...dataset,
            author,
        };
    })

    return populatedDatasets;
}