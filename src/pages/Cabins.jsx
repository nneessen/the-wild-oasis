import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://ghmlxidticyjldrjqqer.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-02-26T14%3A01%3A12.509Z"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
