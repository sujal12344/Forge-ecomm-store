type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

type Products = {
  id: string;
  category: Category;
  price: number;
  name: string;
  color: Color;
  size: Size;
  Featured: boolean;
  images: Image[];
};

type Image = {
  id: string;
  url: string;
};

type Color = {
  id: string;
  name: string;
  value: string;
};

type Size = {
  id: string;
  name: string;
  value: string;
};
