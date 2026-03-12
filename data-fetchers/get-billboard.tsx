const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.DEMO_STORE_ID}/billboards`;

const getBillboard = async (id: string) => {
  console.log("Fetching getBillboard from:", URL);
  if (!id) throw new Error("Id is required");
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Error fetching billboard");
  const data = await res.json();

  return data;
};

export default getBillboard;
