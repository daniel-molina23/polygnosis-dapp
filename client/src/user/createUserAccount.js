import firebase from 'firebase/app';


export const createUserAccount = async (email, password, newDocument) => {

    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const userId = userCredential.user.uid; //extract unique identifier
                
                //create new document in firebase with uniqueId as the userId
                firebase.firestore()
                    .collection('users')
                    .doc(userId)
                    .set(newDocument);
            })
    }
    catch (e) {
        throw new Error('Error occured while creating an account.');
    }

}