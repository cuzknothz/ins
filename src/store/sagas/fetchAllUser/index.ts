import { all, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllPostsFailure,
  fetchAllPostsRequest,
  fetchAllPostsSuccess,
  Post,
  userPostFailure,
  userPostRequest,
  userPostSuccess,
} from '@/store/reducers/postsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, storage } from '@/helpers/firebase';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import { editProfileSuccess } from '@/store/reducers/authSlice';
import {
  fetchAllUsersFailure,
  fetchAllUsersRequest,
  fetchAllUsersSuccess,
} from '@/store/reducers/usersSlice';

interface UserPost {
  caption: string;
  selectedFile: string;
  userUid: string;
}

function* onUserPost(): any {
  try {
    const querySnapshotAllPosts = yield getDocs(collection(db, 'users'));

    let allUsers: any[] = [];

    querySnapshotAllPosts.forEach((doc: any) => {
      allUsers.push(doc.data());
    });

    // console.log(allPost);
    yield put(fetchAllUsersSuccess(allUsers));
  } catch (err) {
    yield put(fetchAllUsersFailure(err));
  }
}

export function* fetchAllUsersSaga() {
  yield takeLatest(fetchAllUsersRequest.toString(), onUserPost);
}
