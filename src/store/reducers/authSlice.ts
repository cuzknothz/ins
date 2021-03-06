import { EmailPassword, ISignUpWithEmail, User } from '@/utils/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: User | undefined;
  status: 'authenticated' | 'unauthenticated';
  errMsg: string;
}

const initialState: AuthState = {
  errMsg: '',
  user: undefined,
  status: 'unauthenticated',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUserWithEmailRequest: (state, action: PayloadAction<ISignUpWithEmail>) => {
      state.errMsg = '';
    },
    createUserWithEmailSuccess: (state, action) => {
      state.user = action.payload;
      state.status = 'authenticated';
      state.errMsg = '';
    },
    createUserWithEmailFailure: (state, action) => {
      state.user = undefined;
      state.status = 'unauthenticated';
      state.errMsg = action.payload.code;
    },
    signInWithGoogleRequest: (state) => {
      state.errMsg = '';
    },
    signInWithGoogleSucess: (state, action) => {
      state.user = action.payload;
      state.status = 'authenticated';
      state.errMsg = '';
    },
    signInWithGoogleFailure: (state, action) => {
      state.status = 'unauthenticated';
      state.user = undefined;
      state.errMsg = action.payload.code;
    },
    signInWithFacebookRequest: (state) => {
      state.errMsg = '';
    },
    signInWithFacebookSucess: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errMsg = '';
    },
    signInWithFacebookFailure: (state, action) => {
      state.status = 'unauthenticated';
      state.user = undefined;
      state.errMsg = action.payload.code;
    },
    signInWithEmailRequest: (state, action: PayloadAction<EmailPassword>) => {
      state.errMsg = '';
    },
    signInWithEmailSuccess: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errMsg = '';
    },
    signInWithEmailFailure: (state, action) => {
      state.status = 'unauthenticated';
      state.user = undefined;
      state.errMsg = action.payload.code;
    },
    signOutRequest: (state) => {
      state.errMsg = '';
    },
    signOutSuccess: (state) => {
      state.status = 'unauthenticated';
      state.user = undefined;
      state.errMsg = '';
    },
    signOutFailure: (state, action) => {
      state.errMsg = action.payload.err;
    },
    editProfileRequest: (state, action) => {},
    editProfileSuccess: (state, action) => {
      state.user = action.payload;
    },
    editProfileFailure: (state, action) => {
      state.errMsg = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  createUserWithEmailFailure,
  createUserWithEmailRequest,
  createUserWithEmailSuccess,
  signInWithEmailFailure,
  signInWithEmailRequest,
  signInWithEmailSuccess,
  signInWithFacebookFailure,
  signInWithFacebookRequest,
  signInWithFacebookSucess,
  signInWithGoogleFailure,
  signInWithGoogleRequest,
  signInWithGoogleSucess,
  signOutFailure,
  signOutRequest,
  signOutSuccess,
  editProfileRequest,
  editProfileFailure,
  editProfileSuccess,
} = authSlice.actions;
