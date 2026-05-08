import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/PasteS';

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams('');

  const pasteId = searchParams.get('pasteId');

  const dispatch = useDispatch();

  const AllPaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {

    if (pasteId) {

      const paste = AllPaste.find((p) => p._id === pasteId);

      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }

  }, [pasteId, AllPaste]);

  function create() {

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {

      dispatch(updateToPastes(paste));

    } else {

      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (

    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-4xl bg-gray-900 shadow-2xl rounded-3xl p-8 border border-gray-800">

        

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <input
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
              flex-1
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              outline-none
              focus:ring-2
              focus:ring-blue-500
              text-white
              placeholder-gray-400
              transition-all
            "
          />

          <button
            onClick={create}
            className="
              px-6
              py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              active:scale-95
              transition-all
              duration-200
              font-semibold
              shadow-lg
            "
          >
            {pasteId ? 'Update Paste' : 'Create Paste'}
          </button>

        </div>

        {/* Textarea */}
        <textarea
          value={value}
          placeholder="Write your content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={18}
          className="
            w-full
            rounded-2xl
            p-5
            bg-gray-800
            border
            border-gray-700
            outline-none
            focus:ring-2
            focus:ring-blue-500
            text-white
            placeholder-gray-400
            resize-none
            transition-all
          "
        />

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">

          <p>
            {value.length} characters
          </p>

          <p>
            {pasteId ? 'Editing Mode' : 'New Paste'}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Home