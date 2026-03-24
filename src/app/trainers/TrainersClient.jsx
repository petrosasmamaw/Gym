"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrainers } from '../../store/slices/trainersSlice';

export default function TrainersClient() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((s) => s.trainers);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTrainers());
  }, [dispatch, status]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {list.map((t) => (
        <div key={t._id || t.id || t.name} className="bg-gray-900/60 rounded-xl overflow-hidden p-0">
          <div className="w-full h-48 bg-gray-800">
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-lg">{t.name}</h4>
            <div className="text-yellow-400 text-sm font-medium mt-1">{t.role}</div>
            <p className="mt-2 text-gray-400 text-sm">{t.bio}</p>
            <div className="mt-4">
              <a href="#" className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">Contact</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
