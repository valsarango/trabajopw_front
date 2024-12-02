const apiUrl = "https://prograweb-api-btfkd0hxfxfnbscb.eastus2-01.azurewebsites.net";

export const create = async ({ email, password, nombre }) => {
  const response = await fetch(`${apiUrl}/CrearCuenta`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, nombre }),
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud de registro");
  }

  return response.json();
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${apiUrl}/InicioSesion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud de inicio de sesión");
  }

  return response.json();
};