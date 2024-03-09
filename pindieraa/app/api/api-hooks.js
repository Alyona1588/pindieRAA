'use client';
import {useState, useEffect} from 'react';
import {getNormalizedGamesDataByCategory} from './api-utils';
import { endpoints } from './config';

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      async function fetchData() {
        const data = await getNormalizedGamesDataByCategory(endpoint, category);
        setData(data);
      }
      fetchData();
    }, []);
    return data;
  }; 

  