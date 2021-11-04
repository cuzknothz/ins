import Comment from '@/assets/svg/comment.svg';
import Emoji from '@/assets/svg/emoji.svg';
import Like from '@/assets/svg/like.svg';
import MoreOptions from '@/assets/svg/more_options.svg';
import Save from '@/assets/svg/save.svg';
import Share from '@/assets/svg/share.svg';
import { ImageNextJS } from '@/components/Common/ImageNextJS';
import { Story } from '@/components/Stories/Story';
import { Post } from '@/store/reducers/postsSlice';
import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';

export const CardFeed: React.FC<Post> = ({ imageURL, user, likes, caption }) => {
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState<boolean>(false);
  useEffect(() => {
    if (comment) {
      return setIsComment((prev) => true);
    }
    setIsComment((prev) => false);
  }, [comment, isComment]);

  return (
    <>
      {/* header section */}
      <div className="w-screen sm:w-[600px] h-[70px] border-[1px] border-ins-border ">
        <div className="w-11/12 h-full flex justify-between items-center mx-auto">
          <div className="scale-75">
            <Story />
            {user}
          </div>
          <Icon size={22}>
            <MoreOptions />
          </Icon>
        </div>
      </div>
      {/* picture video section */}
      <div className="w-full sm:w-[600px] border-ins-border border-[1px] border-t-0 flex flex-col justify-end">
        <div className="">
          <ImageNextJS width="full" height={700} quality src={imageURL} />
        </div>
        {/* comment section */}
        <div className="w-full sm:w-full h-auto flex flex-col justify-end">
          <div className="w-11/12 h-[60px] mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center space-x-3 ">
              <Icon size={22}>
                <Like />
                {likes?.length}
              </Icon>
              <Icon size={22}>
                <Comment />
              </Icon>
              <Icon size={22}>
                <Share />
              </Icon>
            </div>
            <div className="">
              <Icon size={22}>
                <Save />
              </Icon>
            </div>
          </div>
          <div className="w-11/12 mx-auto text-red-600 cursor-pointer">800 Like</div>
          <div className="w-11/12 mx-auto h-auto">
            <span className="text-blue-500 cursor-pointer text-sm">{user}</span>
            <p>{caption}</p>
          </div>
          <div className="w-full sm:w-full h-5"></div>
          <div className="border-t-[1px] border-ins-border w-full h-[55px]">
            <div className="w-11/12 h-full mx-auto flex justify-between items-center">
              <div className="cursor-pointer">
                <Emoji />
              </div>
              <input
                className="focus:outline-none py-2 min-w-[250px]  sm:w-[400px]"
                placeholder="Add Comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <p className={`${isComment ? 'text-blue-500' : ''} cursor-pointer `}>Post</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
