function validAuth() {
  // Get the token from the local storage
  const token = localStorage.getItem("token");

  // Validate if the token is valid
  if (!token) return false;
  return true;
}

export default validAuth;
