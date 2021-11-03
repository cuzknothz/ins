import { AppRoutes } from '@/routes';
import { useAppDispatch } from '@/store';
import { signOutRequest } from '@/store/reducers/authSlice';
import { useRouter } from 'next/router';
import React from 'react';
import { setSelectedOnProfilePageIsSaved } from '@/store/reducers/appSlice';

export const ProfilePop: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div>
      <div className="w-[250px] h-[150px]  flex flex-col justify-between border-[1px] border-ins-border bg-white">
        <div className="w-full h-full  flex flex-col justify-around">
          <div
            onClick={() => {
              router.push(AppRoutes.PROFILE);
            }}
            className="flex cursor-pointer hover:bg-gray-300 h-full justify-start items-center"
          >
            <div className="ml-3 mr-5">
              <svg
                aria-label="Profile"
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 32 32"
                width="16"
              >
                <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
              </svg>
            </div>
            <div>Profile</div>
          </div>
          <div
            onClick={() => {
              dispatch(setSelectedOnProfilePageIsSaved());
              router.push(AppRoutes.PROFILE);
            }}
            className="flex cursor-pointer hover:bg-gray-300 h-full justify-start items-center"
          >
            <div className="ml-3 mr-5">
              <svg
                aria-label="Saved"
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 32 32"
                width="16"
              >
                <path d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z"></path>
              </svg>
            </div>
            <div>Saved</div>
          </div>

          <div
            className="flex cursor-pointer hover:bg-gray-300 h-full justify-start items-center"
            onClick={async () => {
              await dispatch(signOutRequest());
              router.push(AppRoutes.SIGN_IN);
            }}
          >
            <div className="ml-3 mr-5">
              <svg
                aria-label="Switch Accounts"
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 32 32"
                width="16"
              >
                <path d="M10.3 10.7c0-.8-.7-1.5-1.5-1.5H4.9C7.2 5.4 11.4 3 16 3c3.6 0 7 1.5 9.5 4.1.5.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-3-3.2-7.3-5-11.7-5C10.7 0 6 2.5 3 6.7V3.5C3 2.7 2.3 2 1.5 2S0 2.7 0 3.5v7.2c0 .8.7 1.5 1.5 1.5h7.3c.8 0 1.5-.6 1.5-1.5zm20.2 9.1h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.8C24.8 26.6 20.6 29 16 29c-3.6 0-7-1.5-9.5-4.1-.5-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1 3 3.2 7.3 5 11.7 5 5.3 0 10-2.5 13-6.7v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.2c0-.8-.7-1.4-1.5-1.4z"></path>
              </svg>
            </div>
            <div>Switch Accounts</div>
          </div>
        </div>
        <div
          onClick={() => dispatch(signOutRequest())}
          className="h-[45px] hover:bg-gray-300 w-full border-t-[1px] border-ins-border  flex justify-center items-center cursor-pointer"
        >
          Log Out
        </div>
      </div>
    </div>
  );
};
