export function isValidBio(biography){
    //must be <= 300 characters
    if((biography instanceof String || typeof(biography) === 'string') && biography.length <= 300){
        return true;
    }
    return false;
}

export function isValidDisplayName(displayName){
    //must be <= 20 characters
    if((displayName instanceof String || typeof(displayName) === 'string') && displayName.length <= 20){
        return true;
    }
    return false;
}