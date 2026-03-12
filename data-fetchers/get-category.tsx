//For getting the billboard in the categories page

const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.DEMO_STORE_ID}/categories`;

const getCategory = async (id: string) => {
  if (!id) throw new Error("Id is required");
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Error fetching category");
  const data = await res.json();
  return data;
};

export default getCategory;
