import { getCurrentUser } from '../auth';
import { subscribeToUserData } from './subscribeToUserData';


export const subscribeToCurrentUserDatasets = cb => {
    const currentUser = getCurrentUser();
    if(!currentUser) return cb([]);
    return subscribeToUserData(currentUser.id, cb);
}