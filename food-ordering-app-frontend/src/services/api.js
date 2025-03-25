const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  return response.json();
};

