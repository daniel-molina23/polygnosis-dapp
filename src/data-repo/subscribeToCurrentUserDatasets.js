import { getCurrentUser } from '..auth';
import { subscribeToDatasets } from './subscribeToDatasets';


export const subscribeToCurrentUserDatasets = cb => {
    const currentUser = getCurrentUser();
    if(!currentUser) return cb([]);
    return subscribeToDatasets(currentUser.id, cb);
}