import useStyle from "../../theme";
//import { Typography } from "@mui/material";

function BookTitle() {
  const styleclass = useStyle();
  return (
    <>
      {" "}
      <p className={styleclass.bookTitle}>Beyond Entrepreneurship 2.0</p>
    </>
  );
}
export default BookTitle;
