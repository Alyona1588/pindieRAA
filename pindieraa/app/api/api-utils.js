export const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const isResponseOk = (response) => {
  return !(response instanceof Error);
};

export const normalizeDataObject = (obj) => {
  //  console.log("normalizeDataObject");
  //  console.log(normalizeDataObject);
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  };
};

export const normalizeData = (data) => {
  // console.log("normalizeData");
  // console.log(normalizeData);
  // console.log(item);
  return data.map((item) => {
    return normalizeDataObject(item);
      //  console.log(item);
  });
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
  const data = await getData(`${url}?categories.name=${category}`);
    //  console.log(data);
  // Применяем функцию нормализации для работы с массивом
  return isResponseOk(data) ? normalizeData(data) : data;
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
    //  console.log(data);
  // Применяем функцию нормализации для работы с объектом
  return isResponseOk(data) ? normalizeDataObject(data) : data;
};
