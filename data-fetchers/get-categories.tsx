const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.DEMO_STORE_ID}/categories`;

const getCategories = async (): Promise<Category[]> => {
  console.log("Fetching categories from:", URL);
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Error fetching categories");
  const data = await res.json();
  return data;
};

export default getCategories;
