import { useLoaderData, useParams } from "react-router-dom";
import Phone from "./Phone";
import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

const EachPhoneDetails = () => {
  const [phone, setPhone] = useState([]);

  const { id } = useParams();
  const phones = useLoaderData();
  const clickedId = id;

  // console.log(clickedId, phones);

  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === clickedId);
    setPhone(findPhone);
  }, [clickedId, phones]);
  console.log(phone);
  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default EachPhoneDetails;
