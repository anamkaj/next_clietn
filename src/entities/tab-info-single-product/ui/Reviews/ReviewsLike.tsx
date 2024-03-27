"use client";

import React from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { usePostReviewsRating } from "../../lib/hook/post.reviews.rating";

export default function ReviewsLike({ id }: { id: number }) {
  const { incLike, setLike, like, dislike, setDislike } =
    usePostReviewsRating(id);
  return (
    <div className=" flex gap-4">
      <div>{like || dislike ? "" : <p>Отзыв полезен? </p>}</div>

      {like || dislike ? (
        <p>Ваш голос учтен!</p>
      ) : (
        <div className=" flex gap-4">
          <BsHandThumbsUp
            onClick={() => {
              setLike(() => true);
            }}
            className=" cursor-pointer h-6 w-6"
          />
          <BsHandThumbsDown
            onClick={() => {
              setDislike(() => true);
            }}
            className=" cursor-pointer  h-6 w-6"
          />
        </div>
      )}
    </div>
  );
}
