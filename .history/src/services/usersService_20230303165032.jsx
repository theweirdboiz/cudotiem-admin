import * as httpRequest from "@ultis/httpRequest";

export const fetchUsers = async () => {
  try {
    const res = await httpRequest.get("/users");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
