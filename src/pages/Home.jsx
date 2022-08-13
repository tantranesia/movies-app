import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';

import { XCircle } from 'react-feather';
import { Link } from 'react-router-dom';

export const Context = createContext(null);

function Home() {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    image: '',
    id: 0,
  });
  const films = useSelector((state) => state.films);
  console.log(films, 'cek');
  //   handle show
  const handleShow = (id, image) => {
    setData({
      image: image,
      id: id,
    });
    console.log(data);
    console.log(show);
  };

  useEffect(() => {
    handleShow();
  }, []);
  return (
    <div className="py-10 px-6 bg-frm-black min-h-screen">
      <Context.Provider
        value={{
          search,
          updateSearch: (search) => setSearch(search),
          page,
          updatePage: (page) => setPage(page),
        }}
      >
        <Navbar />
        <div className="grid grid-rows-3 grid-flow-col gap-5 my-12 ">
          {films.films === undefined ? (
            <p className="text-frm-white">No data yet</p>
          ) : (
            films.films.map((col, idx) => {
              return (
                <>
                  <Link to={`/${col.imdbID}`}>
                    <div className="w-[300px] hover:border hover:border-frm-yellow flex flex-col items-center p-6">
                      <img
                        src={col.Poster}
                        alt="poster"
                        className="w-[250px] h-[350px] rounded-lg"
                        onMouseOver={() => {
                          handleShow(col.imdbID, col.Poster);
                          setShow(true);
                        }}
                        // onMouseOut={() => setShow(false)}
                      />
                      <p className="text-frm-white font-bold text-lg truncate">
                        {col.Title}
                      </p>
                      <p className="text-frm-white">{col.Year}</p>
                    </div>
                  </Link>
                </>
              );
            })
          )}
          {show && (
            <div
              id={data.id}
              className="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity flex items-center justify-center gap-5"
            >
              <button
                onClick={() => setShow(false)}
                className="fixed left-60 top-32 w-32"
              >
                <XCircle className="text-frm-yellow" />
              </button>
              <img src={data.image} alt="poster-id" className="w-[550px]" />
            </div>
          )}
        </div>
      </Context.Provider>
    </div>
  );
}

export default Home;
