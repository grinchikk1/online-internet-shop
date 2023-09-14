import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  imageUrls: Yup.string()
    .required("Image URLs is required")
    .test("isValidUrls", "Invalid URL format", (value) => {
      const urls = value.split(",");
      return urls.every((url) => url.startsWith("https://"));
    }),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .integer("Quantity must be an integer"),
  name: Yup.string().required("Name is required"),
  currentPrice: Yup.number()
    .required("Current Price is required")
    .positive("Current Price must be a positive number"),
  previousPrice: Yup.number()
    .required("Previous Price is required")
    .positive("Previous Price must be a positive number"),
  categories: Yup.string().required("Categories is required"),
  productMaterial: Yup.string().required("Product Material is required"),
  brand: Yup.string().required("Brand is required"),
  manufacturerCountry: Yup.string().required(
    "Manufacturer Country is required"
  ),
  description: Yup.string().required("Description is required"),
  rating: Yup.number()
    .required("Rating is required")
    .positive("Rating must be a positive number")
    .integer("Rating must be an integer"),
});

export default validationSchema;
