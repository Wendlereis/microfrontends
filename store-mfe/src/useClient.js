import { useState } from "react";

import PubSub from "pubsub-js";

const clientsResponse = ["cool-company", "nice-company", "wonder-company"];

export function useClient() {
  const [client, setClient] = useState(clientsResponse[Math.floor(Math.random() * 3)]);

  PubSub.publish("client", client);

  return {
    client,
    setClient,
  };
}
