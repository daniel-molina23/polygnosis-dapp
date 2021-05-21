import firebase from 'firebase/app';

export const addAuthListener = (callback) => {
    const onChange = (user) => {
        if(user){
            //if user exists
            callback({});
        }
        else{
            callback(null);//no current user
        }
    }

    return firebase.auth().onAuthStateChanged(onChange);
}