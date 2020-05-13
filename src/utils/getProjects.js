import { projectsDataApiUrl } from '../utils/constants';
const fetch = require("node-fetch");

export default async (pid = undefined) => {
  const data = await fetch(projectsDataApiUrl);
  const jsonData = await data.json();

  let result = jsonData;
  if (pid) {
    result = jsonData.filter(project => project.id === Number(pid))[0];
  }
  
  return result;
}
