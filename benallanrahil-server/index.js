import express from "express";
import needle from "needle";

const app = express();

const token = process.env.BEARER_TOKEN;
const endpointUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

app.get("/tweets", async (req, res) => {
  console.log(token);
  // Edit query parameters below
  const params = {
    screen_name: "ballanrahill",
    count: 3,
    trim_user: "false",
    exclude_replies: "true",
  };

  const twitterRes = await needle("get", endpointUrl, params, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (twitterRes.body) {
    res.send(twitterRes.body);
  } else {
    throw new Error("Unsuccessful request");
  }
  res.send("Hello world");
});

app.listen(3000, () => console.log(`Express listening on port 3000`));
