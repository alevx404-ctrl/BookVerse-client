const API_URL = "https://bookverse-server-n9xh.onrender.com/api/auth";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};