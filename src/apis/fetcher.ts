export const fetcher = {
  get: async (url: string) => {
    const response = await fetch(url);

    return response.json();
  },
};
