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

// Для данных Яндекс
// export const normalizeDataObject = (obj) => {
//   //  console.log("normalizeDataObject");
//   //  console.log(normalizeDataObject);
//   return {
//     ...obj,
//     category: obj.categories,
//     users: obj.users_permissions_users,
//   };
// };

// Для локальных данных
const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj);
  // console.log("normalizeDataObject До обработки");
  //  console.log(str);

  str = str.replaceAll("_id", "id");

  //  console.log("normalizeDataObject после обработки");
  console.log(str);

  const newObj = JSON.parse(str);
  const result = { ...newObj, category: newObj.categories };
  return result;
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
  // console.log(`data по category = ${category}   ${data} `);
  // console.log("СООБЩЕНИЕ_____________________");
  // console.log(data);

  //было так, но в случае если массив не приходил или был пустой выпадала ошибка
  // return isResponseOk(data) ? normalizeData(data) : data;

  // Проверка массива пакета data что он является массивом
  if (Array.isArray(data)) {
    return isResponseOk(data) ? normalizeData(data) : data;
  }
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
  //  console.log(data);
  // Применяем функцию нормализации для работы с объектом
  return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const authorize = async (url, data) => {
  console.log(
    "СООЮЩЕНИЕ_________________________________authorize_____________"
  );
  console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
      throw new Error("Ошибка авторизации");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const setJWT = (jwt) => {
  localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
  return localStorage.getItem("jwt");
};

export const removeJWT = () => {
  localStorage.removeItem("jwt");
};

export const getMe = async (url, jwt) => {
  console.log("СООБЩЕНИЕ--------------------getMe начало");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { authorization: `Bearer ${jwt}` },
    });
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const result = await response.json();
    console.log("СООБЩЕНИЕ------------------async--getMe Продолжение");
    console.log("result");
    console.log(result);

    return result;
  } catch (error) {
    return error;
  }
  //  console.log("СООБЩЕНИЕ--------------------getMe конец");
};

export const checkIfUserVoted = (game, userId) => {
  console.log("Проверка. Пользователь уже голосовал? (checkIfUserVoted)");

  console.log(" Проголосовавшие пользователи за игру game.users =  ");
  console.log(game.users);

  console.log(" текущий пользователь userId =  ");
  console.log(userId);

  return game.users.find((user) => user.id === userId);
};

export const vote = async (url, jwt, usersArray) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ users: usersArray }),
    });
    if (response.status !== 200) {
      throw new Error("Ошибка голосования");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
