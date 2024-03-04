/* eslint-disable react/jsx-no-leaked-render */
import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  white-space: wrap;
  overflow: hidden;
`;

const NumNights = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  white-space: wrap;
  overflow: hidden;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <NumNights>{numNights} nights</NumNights>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
