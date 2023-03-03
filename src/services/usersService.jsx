import * as httpRequest from "@ultis/httpRequest";

export const fetchUsers = async () => {
  try {
    const res = await httpRequest.get("/users");
    return res;
  } catch (error) {
    console.log(error);
  }
};
