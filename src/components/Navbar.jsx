import React, { useContext, useEffect } from 'react';
import { Context } from '../pages/Home';
import { useDispatch } from 'react-redux';
import axios from '../utils/axios';
// import action
import { getFilms } from '../redux/action/list';
import { Search } from 'react-feather';

function Navbar() {
  const { search, updateSearch, page } = useContext(Context);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    updateSearch(e.target.value);
  };
  //   api call
  const getFilm = () => (dispatch) => {
    axios
      .get(`?apikey=faf7e5bb&s=${search}&page=1`)
      .then((res) => {
        dispatch(getFilms(res.data.Search));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getFilm());
  }, [search]);
  return (
    <div>
      <div className="flex gap-4 px-2 py-3 rounded border border-frm-white hover:border-frm-yellow">
        <Search className="text-white" />
        <input
          placeholder="Search movie"
          className="bg-frm-black w-full focus:outline-none text-frm-white"
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
}

export default Navbar;
