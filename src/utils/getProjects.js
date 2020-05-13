import { reqUrl } from '../utils/constants';

export default async (pid) => {
  const data = await fetch(`${reqUrl}/js/projects.json`);
  const jsonData = await data.json();

  let result = jsonData;
  if (pid) {
    result = jsonData.filter(project => project.id === Number(pid))[0];
  }
  
  return result;
}
