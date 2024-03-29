import firebase from 'firebase/app';


export const getCurrentUser = () => {
    const user = firebase.auth().currentUser;
    if(!user) return null;
    //else
    return {
        id: user.uid,
    };
}