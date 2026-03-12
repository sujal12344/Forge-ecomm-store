const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.DEMO_STORE_ID}/billboards`;

const getBillboard = async (storeId: string) => {
  if (!storeId) throw new Error("Store id is required");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${storeId}/billboards`,
  );
  if (res.status !== 200) throw new Error("Error fetching billboard");

  const data: Billboard[] = await res.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No billboards found");
  }

  return data[0];
};

export default getBillboard;
