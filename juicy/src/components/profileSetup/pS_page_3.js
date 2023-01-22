import React from "react";
import PrevBtn from "./prevBtn";
import { toast } from "react-hot-toast";
import Tags from "./Tags";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const PS3 = ({ updateData, setPage, formData }) => {
  const { likes, dislikes, work, education, profileimg, about } = formData;
  const { auth, setIsLoggedIn } = useAuth();
  const { id } = auth;

  const handleSubmit = async () => {
    const toastId = toast.loading("Pending")
    const likesMaped = likes?.map((like) => {
      return { user_id: id, thing: like, "likes/dislikes": 1 };
    });
    const dislikesMaped = dislikes?.map((dislike) => {
      return { user_id: id, thing: dislike, "likes/dislikes": 0 };
    });

    try {
      const formResponse = await axios.put(
        `/setup/${id}`,
        formData
      );
      if(likes?.length > 0 && dislikes?.length > 0){
      const resLikesDislikes = await axios.post(
        "/likesDislikes",
        { likes: likesMaped, dislikes: dislikesMaped }
      )
      }
      setIsLoggedIn(true)
      toast.success("succesfull profile setup!", { id: toastId });
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
      toast.error("an error occured", { id: toastId })
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
      />
      <p className="mb-2 ">Education:</p>
      <input
        required
        value={education}
        onChange={(e) => updateData({ education: e.target.value })}
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
      />
      <p className="mb-2 ">Profile Image:</p>
      <input
        value={profileimg}
        defaultValue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXm5uazs7OwsLDp6enh4eHl5eW0tLTb29u3t7fe3t7JycnAwMC6urrW1tbMzMzDw8PS0tJ2rmK9AAAFkElEQVR4nO2d3ZqiMAyGoQEBQeH+r3ZBVHZmBWma0C9s36OZM78nzU/T0GaUJRKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSYNBEVpbPP04GUVkNfVvnD+r2OjTZiVSO6q6dcy5fmP5rh/IUGimr+ssPdYvMvK/Ma6Ry6D7Le5qyLWL/xCAou1/W5c0aL41lMw75F30PjVer7khVt0Pf7I43kyLvu+S91mp/i/17PaFipwEXkfXNkh2puvjpe2i82pFIg6cBnxLbMvYv3wldWQJHiZ2R7NgzBY7YyI4BAkeJBuq4IIEj6BLZPmhFIjOK/qSJrWKLRkBgfkGOqJ2AwDzvYPOigBM+cH1sJWs0IvomiQNmtKFWSmHuMKPNTWaNPugQjUi1nMDc3QElSppwBC9lCHrhhOvhjCgWSF+gBRupXPgGzoilZJyZJYJ5YiVsQrhwKr5IRy5QCoVq7h+4KraovynkTQjWXhRO9zM1kEINN8yh6hrhguaJQzrM0BAIlS9KlUWaA5U18vn+AdAuUSWUjgpj63oj0ib9QA3TdKP76RXqpMOk8ECSQi442UJLYYujUCeWAm2flPKhG2ILW1CqaYA2+Tp16QUmlOo0MZACTaazP0TaHmak0GrDaglTr6AQqRGlkhCBsuGEyJjJL4VIbjgi32yD6rRlGjkfq6mvEU0d2ICbQr7orlDrVKPr7aBcsWDMrn+XCJQw5A+50RTqbJ/+A4VASV9pCwxUe6soRFqkWaEgEGqP/z9sLhTSBVhhqmBEh7RIMwVPhBvdEy+9cY5lXkgnDCwvnCBZgVDN0hnZWAO1cXoh2vjG/PhJMiVCNUtfSJ6TOkA3zGRPoCAXaZa1YhJRrx+QatbgftJNIlnfdbACZYIN7veVM3WoRPx7FXxubflkQbBe/gfCJk/A9vUrhARUqNbMGiEVOFKDdIsAE8b+6fvge6IVE/I3GVDzJVuwSxvMDcVHeMeldhYpdx8FepPCR3hn3iaS4QvWBBHOJzI7YA26tbF/tRcMI9qoSd8wPBH1Vpo1/MMpZBN4A/8DRbDzwq/4NzQspcMH/svUmkL/ZWpNofeRqTU/9HdEa7HUv5thLR/6b/WN1TScZoatupTTczO1e8pYKd9YMPUfsLHmiIzDRMjD+3UYvRpby5R1lIg2yrYJaxzTTEt4gtUVthRruKOKZvYX3MY+3FDpOtxjUoc6SfOLgJkMG6VbyFwN6ETbL5qQo3wLJ1CBXybgu2L4pxfYMzVUCAzSIkukSmRSGLdlQ4OEvql8i63kMxT8yswisSsAzUi3PY/l7dYIt1KpkRuCniW2UGakQv5GM3fBuQqLml5ygS4aW4iBaKKq3XhsNFBj9CcuiYp78OTzpsRxqcbTOMob9Mz31thFOpQiaob221uxYhqPNiNRdrvWKsEFQCNl5e33K9RHaKwPeuWamgjqXhrv+iXAmBcOXJr/asz7SjWwTnkvnrynyMmQSiLF604mznUqHkml0k26HJxr5R+6Ho7JfLtx9VWyZKUCY4H+wOXtTcojZXe2goweKaNRrDUhj8QW0v+Z9GMJrudYz6QfS1i3Y3RBfNyFb0atpzmkYbdXtV7mkMfxZuLsCJwCDuNk1coSnWFItCWQIZGU3nDSw3l+GaZyT6AunqMqKleuKuMzAkDAtegG+0cArEWZhb2jf+LPFx/G3mij8ZjDMeybbrRUy/zDrjljnTdVjqLeYUKVR0UPY8c6VbrX+Ti+TuHaDTMz33ZSdlPhmy/BRueG/GPZHFE9gQm/fNSg8nLT0WxW4LZz4YuND6hMlzMLG5/20wniTL459afwMlUUVqPpKSLpxOpFy8ZL0oXVZVrCH8PsZW0nbK6DuMpKND2NG64mfZWHGiPxeZmWZyjZnvxVm/4B5UtbNplkcc8AAAAASUVORK5CYII="
        onChange={(e) => updateData({ profileimg: e.target.value })}
        type="text"
        className="h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
      />
      <p className="mb-2 ">About:</p>
      <textarea
        required
        value={about}
        onChange={(e) => updateData({ about: e.target.value })}
        type="text"

        className="resize-none p-2 min-h-14 rounded-lg bg-gray-300 mb-8 w-full lg:w-full md:w-full"
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
