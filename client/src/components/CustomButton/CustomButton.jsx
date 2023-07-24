import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import { customButtonStyle } from "./CustomStyle";

function CustomButton({ value }) {
  const formik = useFormikContext();

  const handleClick = () => {
    formik.handleSubmit();
  };

  return (
    <Button variant="contained" style={customButtonStyle} onClick={handleClick}>
      {value}
    </Button>
  );
}

export default CustomButton;
