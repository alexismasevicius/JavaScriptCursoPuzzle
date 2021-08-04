/* 
Utilizando la API de GITHUB (https://api.github.com)
realizar las sigiuentes tareas

a)Obtener una lista de los repositorios publicos
(documentacion de la API: https://docs.github.com/es/rest/reference/repos#list)

b) Generar una funcion que a partir de la respuesta
del punto anterior, retorne un array de los nombres
de usuario de los owners de los repositorios listados

c)Tomar de la respuesta del primer repositorio, y
 listar tdos los respositorios del owner
 Pista: para ver el endpoint al cual deberias pegarle
  para traer los repositorios del owner, deberas 
  inspeccionar la informacion que recibes dentro 
  del primer request

*/

///EJ 1
const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};

//getPublicRepositories();

const getOwnersNames = async () => {
  const repositories = await getPublicRepositories();

  const namesArray = repositories.map((repo) => repo.owner.login); ///accedo al nombre del owner y lo mapeo en un array de solo nombres
  console.log(namesArray);
};
getOwnersNames();

const getRepositoriesFromOwner = async () => {
  const repositories = await getPublicRepositories();
  const firstRepository = repositories[0];

  const reposEndpoint = firstRepository.owner.repos_url;

  const reposResponse = await fetch(reposEndpoint);
  const jsonReposResponse = await reposResponse.json();

  console.log(jsonReposResponse);
};
getRepositoriesFromOwner();
