import firebase from 'react-native-firebase';

if (__DEV__) {
  firebase.config().enableDeveloperMode();
}

export default async function fetchConfettiFromFirebase(keys: Array<string>) {
  return firebase
    .config()
    .fetch(60)
    .then(() => {
      return firebase.config().activateFetched();
    })
    .then(() => {
      return firebase.config().getValues(keys);
    })
    .then((snapshot: any) => {
      let data: any = {};
      Object.keys(snapshot).forEach((key) => {
        data[key] = snapshot[key].val();
      });
      return data;
    })
    .catch((error: any) => {
      return error;
    });
}
