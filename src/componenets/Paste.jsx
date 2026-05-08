import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/PasteS';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  // Filter pastes
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  );

  function deleted(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (

    <div className="
      min-h-screen
      bg-gray-950
      text-white
      px-4
      py-8
    ">

      {/* Container */}
      <div className="
        max-w-5xl
        mx-auto
      ">

        {/* Heading */}
        <h1 className="
          text-4xl
          font-bold
          text-center
          text-blue-400
          mb-8
        ">
          All Pastes
        </h1>

        {/* Search */}
        <div className="mb-8">

          <input
            type='search'
            placeholder='Search pastes...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-900
              border
              border-gray-700
              outline-none
              focus:ring-2
              focus:ring-blue-500
              placeholder-gray-400
            "
          />

        </div>

        {/* Paste Cards */}
        <div className="flex flex-col gap-6">

          {
            filteredData.length > 0 ? (

              filteredData.map((e) => {

                return (

                  <div
                    key={e?._id}
                    className="
                      bg-gray-900
                      border
                      border-gray-800
                      rounded-3xl
                      p-6
                      shadow-lg
                      hover:shadow-blue-500/10
                      transition-all
                    "
                  >

                    {/* Title */}
                    <h2 className="
                      text-2xl
                      font-bold
                      text-blue-300
                      mb-3
                      break-words
                    ">
                      {e.title}
                    </h2>

                    {/* Content */}
                    <p className="
                      text-gray-300
                      mb-6
                      whitespace-pre-wrap
                      break-words
                    ">
                      {e.content}
                    </p>

                    {/* Buttons */}
                    <div className="
                      flex
                      flex-wrap
                      gap-3
                      mb-4
                    ">

                      {/* Edit */}
                      <NavLink
                        to={`/?pasteId=${e?._id}`}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-yellow-500
                          hover:bg-yellow-600
                          transition-all
                          text-white
                          font-medium
                        "
                      >
                        Edit
                      </NavLink>

                      {/* View */}
                      <NavLink
                        to={`/pastes/${e?._id}`}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-blue-500
                          hover:bg-blue-600
                          transition-all
                          text-white
                          font-medium
                        "
                      >
                        View
                      </NavLink>

                      {/* Delete */}
                      <button
                        onClick={() => deleted(e?._id)}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-red-500
                          hover:bg-red-600
                          transition-all
                          text-white
                          font-medium
                        "
                      >
                        Delete
                      </button>

                      {/* Copy */}
                      <button
                        onClick={() => {

                          navigator.clipboard.writeText(e.content);

                          toast.success("Copied to clipboard");
                        }}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-green-500
                          hover:bg-green-600
                          transition-all
                          text-white
                          font-medium
                        "
                      >
                        Copy
                      </button>

                      {/* Share */}
                      <button
                        onClick={() => {

                          const shareUrl =
                            `${window.location.origin}/pastes/${e._id}`;

                          navigator.clipboard.writeText(shareUrl);

                          toast.success("Share link copied");
                        }}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-purple-500
                          hover:bg-purple-600
                          transition-all
                          text-white
                          font-medium
                        "
                      >
                        Share
                      </button>

                    </div>

                    {/* Date */}
                    <div className="
                      text-sm
                      text-gray-500
                    ">
                      Created:
                      {" "}
                      {new Date(e.createdAt).toLocaleString()}
                    </div>

                  </div>
                )
              })

            ) : (

              <div className="
                text-center
                text-gray-400
                text-xl
                mt-10
              ">
                No Pastes Found
              </div>
            )
          }

        </div>

      </div>

    </div>
  )
}

export default Paste