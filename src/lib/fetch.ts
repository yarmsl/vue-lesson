/* eslint-disable import/prefer-default-export */
export const fetchGet = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
