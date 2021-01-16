import fetch from "node-fetch";
import ora from "ora";

export const cli = async args => {
  const spinner = ora("Generating link ...").start();
  spinner.color = "green";

  // Remove the first 2 items in the args array
  args.shift();
  args.shift();

  const response = await fetch(`https://share-secrets.vercel.app/api/secret/`, {
    method: "POST",
    body: JSON.stringify({ createdBy: "CLI", content: args.join(" ") }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { data } = await response.json();
  spinner.stop();

  console.log(`https://share-secrets.vercel.app/secret/${data._id}`);
};
