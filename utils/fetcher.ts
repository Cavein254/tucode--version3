import { NextApiRequest, NextApiResponse } from "next";
export const fetcher = async (
  url,
  data,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    console.log("from fetcher");
    console.log(data);
    fetch(url, {
      method: data ? "POST" : "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
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
  return slug;
};
