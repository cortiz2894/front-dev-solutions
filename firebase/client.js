import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, Timestamp, doc, getDoc, getDocs } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnAK4uScZmukkokjPO6K7S5wSgdC2kkXM",
    authDomain: "front-solutions.firebaseapp.com",
    projectId: "front-solutions",
    storageBucket: "front-solutions.appspot.com",
    messagingSenderId: "411042143641",
    appId: "1:411042143641:web:1733013cd91914b63f0708"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore(initializeApp(firebaseConfig));


  const mapUserFromFirebaseAuth = (user) => {
    const name = user.providerData[0].displayName
    const email = user.providerData[0].email
    const avatar_url = user.providerData[0].photoURL
    const uid = user.providerData[0].uid

    return {
        name: name,
        email: email,
        avatar: avatar_url,
        uid: uid
    }
  }

  export const handleOnAuthStateChanged = (onChange) => {
    return onAuthStateChanged(getAuth(), user => {
        const normalizedUser = user ? mapUserFromFirebaseAuth(user) :null
        onChange( normalizedUser )
    })
  }

  export const loginWithGithub = () => {
      const gitHubProvider = new GithubAuthProvider()
      return signInWithPopup(getAuth(), gitHubProvider)
  }

  export const addArticle = async( name, avatar, email, message, uid, title ) => {
    const articles = collection(db, 'articles')
    return await addDoc(articles, {
      name, 
      avatar, 
      email, 
      title,
      message,
      uid,
      createdAt: Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0
    })
  }

  export const fetchLatestArticles = async() => {
    const docArticle = collection(db, "articles");
    return await getDocs(docArticle)
    .then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data


        

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    });
  }