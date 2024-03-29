import axios from "axios";

export default async function getProducts() {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/shop/getproducts"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
}

// export default function handler(req, res) {
//   if (req.method !== "GET") {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }
