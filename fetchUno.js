//FETCH

const getDataFromApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};

console.log(getDataFromApi().then((response) => console.log(response)));
