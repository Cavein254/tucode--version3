import { NextApiRequest, NextApiResponse } from "next";
export const fetcher = async (
  url,
  data,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  
  try {
    fetch(url, {
      method: data ? "POST" : "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials":"true",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json();
    });
  } catch (error) {
    res.json({
      status: "failed",
      error,
      payload: req.body,
    });
  }
};

export const slugGenerator = (title) => {
  const newTitle = title.replaceAll(" ", "-");
  const newDay = new Date();
  const slug =
    newTitle +
    "-" +
    newDay.getFullYear() +
    "-" +
    newDay.getMonth() +
    "-" +
    newDay.getUTCDay() +
    "-" +
    newDay.getUTCHours() +
    "-" +
    newDay.getUTCMinutes() +
    "-" +
    newDay.getMilliseconds();
  return slug.toLocaleLowerCase();
};
