import Firebase from 'firebase/app';

 const config = {
    apiKey: "AIzaSyADGZHLpUyaZi1L-aOw-6a8jcGP1Mo3Fh4",
    authDomain: "routing-firebase-9fe01.firebaseapp.com",
    databaseURL: "https://routing-firebase-9fe01.firebaseio.com",
    projectId: "routing-firebase-9fe01",
    storageBucket: "routing-firebase-9fe01.appspot.com",
    messagingSenderId: "92833343357"
  };
  firebase.initializeApp(config);

export const firebase_db = firebase.database().ref("data/");
export const data_pages = firebase.database().ref("pages");
export const pages_about = firebase.database().ref("pages/about");
export const pages_participate = firebase.database().ref("pages/participate");
export const pages_results = firebase.database().ref("pages/results");


export const POST_DATA = 'POST_DATA';
export const FETCH_DATA = 'FETCH_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGE_ABOUT = 'FETCH_PAGE_ABOUT';
export const FETCH_PAGE_PARTICIPATE = 'FETCH_PAGE_PARTICIPATE';
export const FETCH_PAGE_RESULTS = 'FETCH_PAGE_RESULTS';


export function PostData(post) {
	return dispatch => firebase_db.push(post);
}

export function FetchData() {
  return dispatch => {
    firebase_db.on('value', snapshot => {
      dispatch({
        type: FETCH_DATA, 
        payload: snapshot.val()
      });
    });
  }
}

export function deleteData(key) {
  return dispatch => firebase_db.child(`${key}`).remove(); 
}

export function FetchPages() {
  return dispatch => {
    data_pages.on('value', snapshot => {
      dispatch({
        type: FETCH_PAGES, 
        payload: snapshot.val()
      });
    });
  }
}

export function PostAbout(about) {
  return dispatch => pages_about.set(about);
}

export function PostParticipate(participate) {
  return dispatch => pages_participate.set(participate);
}

export function PostResults(results) {
  return dispatch => pages_results.set(results);
}

