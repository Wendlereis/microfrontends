import create from "zustand";

function getStore() {
  let storeInstance;

  console.log({ storeInstance });

  if (!storeInstance) {
    return create((set) => ({
      client: "nice-company",
      setClient: (client) => set(() => ({ client })),
    }));
  }

  return storeInstance;
}

export default getStore();
