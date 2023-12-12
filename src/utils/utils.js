export const checkCurrentUser = (allUser, loginUser) => {
  if (allUser == null) {
    return false;
  }

  const resultArray = allUser.map((user) => user === loginUser);
  return resultArray;
};
