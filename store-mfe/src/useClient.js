import { useState } from "react";

const clientsResponse = ["cool-company", "nice-company", "wonder-company"];

export function useClient() {
  const [client, setClient] = useState(clientsResponse[Math.floor(Math.random() * 3)]);

  console.log("store-mfe", { client });

  return {
    client,
    setClient,
  };
}
