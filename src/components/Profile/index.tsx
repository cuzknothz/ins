import { withLayout } from '@/hoc/layout/withLayout';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  PostsOrSaved,
  setEditProfilePopUp,
  setSelectedOnProfilePageIsPosts,
  setSelectedOnProfilePageIsSaved,
} from '@/store/reducers/appSlice';
import Image from 'next/image';
import React from 'react';
import { MiniPost } from './MiniPost';

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const selectedField = useAppSelector((state) => state.app.profile.selectedOnProfilePage);
  const dispatch = useAppDispatch();
  console.log(selectedField);

  return (
    <div className="min-h-screen">
      <div className="w-full md:w-10/12 mx-auto">
        {/* top */}
        <div className="flex w-full h-full justify-between  items-center">
          {/* left profile picture */}
          <div className="w-[100px] md:w-[150px] h-full flex flex-col justify-center items-center ">
            <div className="relative w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden cursor-pointer ">
              <Image
                src={`${
                  user && user.photoURL
                    ? user.photoURL
                    : 'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/userDefault%2F44884218_345707102882519_2446069589734326272_n.jpg?alt=media&token=51394aa8-7c3c-4496-8f70-8a9c922f62bb'
                }`}
                alt=""
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* right info */}
          <div className="md:w-[400px] flex flex-col  w-[450px]">
            <div className="w-full h-[50px] flex justify-center items-center ">
              {user?.username}
            </div>
            <div className="w-full h-[50px] flex justify-between items-center ">
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className="">{user?.posts?.length}</p>
                <p>Posts</p>
              </div>
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className=" cursor-pointer">{user?.followers?.length}</p>
                <p>Followers</p>
              </div>
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className="cursor-pointer">{user?.following?.length}</p>
                <p>Following</p>
              </div>
            </div>
            <div className="">
              <div className="h-[30px] items-center hidden md:flex">{user?.name}</div>
              <div className="items-center hidden  md:flex">{user?.bio}</div>
            </div>
            <div className="h-[30px] hidden md:block"></div>
          </div>
          <div className="w-[100px] md:w-[150px] h-full flex justify-center items-center">
            <div
              onClick={() => {
                dispatch(setEditProfilePopUp());
              }}
              className="cursor-pointer hidden md:flex border-[1px] border-ins-border py-2 md:px-5 px-2 rounded-lg hover:bg-blue-300 bg-white"
            >
              Edit Profile
            </div>
          </div>
        </div>
        <div className="w-full md:w-10/12 mx-auto flex md:hidden">
          <div className="w-[10px] h-full"></div>
          <div>
            <div className="h-[30px] flex items-center md:hidden text-sm">{user?.name}</div>
            <p style={{ whiteSpace: 'pre' }}>{user?.bio}</p>
          </div>
        </div>
        <div className="w-full md:w-10/12 mx-auto flex md:hidden justify-center">
          <div
            onClick={() => {
              dispatch(setEditProfilePopUp());
            }}
            className="cursor-pointer mt-[12px] md:hidden border-[1px] border-ins-border py-2  px-24 rounded-lg hover:bg-blue-300 bg-white"
          >
            Edit Profile
          </div>
        </div>
        <div className="h-[12px] md:hidden"></div>

        {/* middle */}
        <div className="sticky top-0 z-20 bg-white">
          <hr />
          <div>
            <div className="h-[50px] flex md:space-x-48 space-x-4 justify-center items-center">
              <div
                onClick={() => dispatch(setSelectedOnProfilePageIsPosts())}
                className={`${
                  selectedField === PostsOrSaved.POSTS ? 'bg-blue-300' : ''
                } border-[1px] cursor-pointer border-ins-border py-2 md:px-16 px-10 rounded-lg hover:bg-blue-300`}
              >
                Posts
              </div>
              <div
                onClick={() => dispatch(setSelectedOnProfilePageIsSaved())}
                className={`${
                  selectedField === PostsOrSaved.SAVE ? 'bg-blue-300' : ''
                } border-[1px] cursor-pointer border-ins-border py-2 md:px-16 px-10 rounded-lg hover:bg-blue-300`}
              >
                Saved
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/* post */}
        <div className="grid grid-cols-3 gap-1">
          {/* Only post show */}
          {selectedField === PostsOrSaved.POSTS &&
            'fsdjafsdafsdfhasdfsfaf'
              .split('')
              .map((i) => (
                <MiniPost
                  key={Math.random()}
                  likes={50}
                  comments={56}
                  imageUrl="https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/default.jpg?alt=media&token=c6dfb887-b739-4260-827e-608d1f405eed"
                />
              ))}
          {/* Only saved show */}
          {selectedField === PostsOrSaved.SAVE &&
            'fsdjahasadgssdfsfaf'
              .split('')
              .map((i) => (
                <MiniPost
                  key={Math.random()}
                  likes={500989}
                  comments={56}
                  imageUrl="https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/default.jpg?alt=media&token=c6dfb887-b739-4260-827e-608d1f405eed"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Profile);
