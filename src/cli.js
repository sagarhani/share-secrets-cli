import fetch from "node-fetch";
export const cli = async args => {
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
  console.log(`https://share-secrets.vercel.app/secret/${data._id}`);
};
