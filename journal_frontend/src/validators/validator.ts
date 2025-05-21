//Names should only contain letters and should not be empty
export const checkName = (name: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
};

// Usernames should only contain letters, numbers, dots, underscores, and hyphens, and should be at least 3 characters long
export const checkUserName = (userName: string) => {
  const regex = /^[a-zA-Z0-9._-]{3,}$/;
  return regex.test(userName);
};

// Emails should be in a valid format
export const checkEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// Passwords should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
export const checkPassword = (password: string) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

export const allFieldOK = (
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  image: File | null
) => {
  return (
    checkName(firstName) &&
    checkName(lastName) &&
    checkUserName(userName) &&
    checkEmail(email) &&
    checkPassword(password) &&
    image !== null
  );
};
