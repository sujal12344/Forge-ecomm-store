import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.DEMO_STORE_ID}/products`;

type queryprops = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  featured?: boolean;
};

const getProducts = async (query: queryprops) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      featured: query.featured,
    },
  });

  const res = await fetch(url);
  if (res.status !== 200) throw new Error("Error fetching products");
  const data = await res.json();
  return data;
};

export default getProducts;
