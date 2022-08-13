import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../pages/Home';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from '../utils/axios';
import { getDetail } from '../redux/action/details';

// import icon
import { ArrowLeftCircle } from 'react-feather';

function Detail(props) {
  let { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  console.log(items);

  const getDetails = () => (dispatch) => {
    axios
      .get(`?apikey=faf7e5bb&i=${id}`)
      .then((res) => {
        dispatch(getDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  return (
    <div className="bg-frm-black min-h-screen py-12 px-10">
      <Link to="/">
        <ArrowLeftCircle className="text-frm-yellow" />
      </Link>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={items.Poster}
            alt="poster"
            className="w-[600px] rounded-lg"
          />
          <p className="text-frm-yellow font-bold text-3xl">{items.Title}</p>
          <p className="text-frm-yellow font-bold text-lg">{items.Year}</p>
        </div>

        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Director: </p>
          <p className="col-span-1 text-left">{items.Director}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Writer: </p>
          <p className="col-span-3 text-left">{items.Writer}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Genre: </p>
          <p className="col-span-1 text-left">{items.Genre}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Casts: </p>
          <p className="col-span-3 text-left">{items.Actors}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Plot: </p>
          <p className="col-span-3 text-left">{items.Plot}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Released: </p>
          <p className="col-span-3 text-left">{items.Released}</p>
        </div>
        <div className="grid grid-cols-6 gap-10 text-frm-white font-bold my-3">
          <p className="col-span-1">Country: </p>
          <p className="col-span-3 text-left">{items.Country}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
