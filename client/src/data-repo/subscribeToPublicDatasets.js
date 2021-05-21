// import { getCurrentUser } from '..auth';
import { subscribeToPublicData } from './subscribeToPublicData';


export const subscribeToPublicDatasets = cb => {
    return subscribeToPublicData(cb);
}