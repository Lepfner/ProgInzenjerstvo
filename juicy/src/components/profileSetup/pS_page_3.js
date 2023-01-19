import React, { useEffect } from "react";
import PrevBtn from "./prevBtn";
import { toast } from "react-hot-toast";
import Tags from "./Tags";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const PS3 = ({ updateData, setPage, formData }) => {
  const { likes, dislikes, work, education } = formData;
  const { auth } = useAuth();
  const { id } = auth;

  const handleSubmit = async () => {
    const toastId = toast.loading("Pending")
    const likesMaped = likes.map((like) => {
      return { user_id:id, thing: like, "likes/dislikes": 1 };
    });
    const dislikesMaped = dislikes.map((dislike) => {
      return { user_id:id, thing: dislike, "likes/dislikes": 0 };
    });

    try {
      const formResponse = await axios.put(
        `/setup/${id}`, 
        {formData}
      );
      const resLikesDislikes = await axios.post(
        "/likesDislikes",
        {likes:likesMaped, dislikes:dislikesMaped}
      )
      console.log(formResponse);
      console.log(resLikesDislikes)
      toast.success("succesfull profile setup!", {id:toastId});
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
      toast.error("an error occured", {id: toastId})
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full lg:text-2xl md: text-2xl sm: text-xl">
      <p className="step-title mb-4 text-xl">Step 3</p>
      <p className="mb-2 ">Work:</p>
      <input
        required
        value={work}
        onChange={(e) => updateData({ work: e.target.value })}
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
        placeholder="placeholder"
      />
      <p className="mb-2 ">Education:</p>
      <input
        required
        value={education}
        onChange={(e) => updateData({ education: e.target.value })}
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
        placeholder="placeholder"
      />
      <p>Likes:</p>
      <Tags
        tags={likes}
        updateData={updateData}
        type="likes"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
      />
      <p className="mt-4">Dislikes:</p>
      <Tags
        tags={dislikes}
        updateData={updateData}
        type="dislikes"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5"
      />
      <div
        className="flex w-full justify-center lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col 
                      lg:text-xl md:text-lg sm: text-lg"
      >
        <PrevBtn setPage={setPage} />
        <button
          className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default PS3;
