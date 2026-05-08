import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ViewPaste = () => {

  const { id } = useParams();

  const allPastes = useSelector(
    (state) => state.paste.pastes
  );

  const paste = allPastes.find(
    (p) => p._id === id
  );

  // Paste not found
  if (!paste) {
    return (
      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-950
        text-white
        text-2xl
        font-bold
      ">
        Paste Not Found
      </div>
    );
  }

  return (

    <div className="
      min-h-screen
      bg-gray-950
      text-white
      px-4
      py-10
      flex
      justify-center
    ">

      <div className="
        w-full
        max-w-4xl
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        shadow-2xl
        p-8
      ">

        {/* Heading */}
        <h1 className="
          text-4xl
          font-bold
          text-center
          text-blue-400
          mb-8
        ">
          View Paste
        </h1>

        {/* Title */}
        <div className="mb-6">

          <label className="
            block
            mb-2
            text-gray-300
            font-medium
          ">
            Title
          </label>

          <input
            type='text'
            value={paste.title}
            disabled
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              text-white
              cursor-not-allowed
            "
          />

        </div>

        {/* Content */}
        <div>

          <label className="
            block
            mb-2
            text-gray-300
            font-medium
          ">
            Content
          </label>

          <textarea
            value={paste.content}
            disabled
            rows={18}
            className="
              w-full
              p-5
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              text-white
              resize-none
              cursor-not-allowed
              whitespace-pre-wrap
            "
          />

        </div>

        {/* Footer */}
        <div className="
          mt-6
          text-sm
          text-gray-500
          text-right
        ">
          Created At:
          {" "}
          {new Date(paste.createdAt).toLocaleString()}
        </div>

      </div>

    </div>
  )
}

export default ViewPaste