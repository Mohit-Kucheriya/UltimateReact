import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1. Bookings
  const numBookings = bookings?.length;

  // 2. Sales i.e. Total price of all bookings
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3. Check-ins i.e. Total number of check-ins of all stays
  const checkIns = confirmedStays?.length;

  // 4. Occupancy rate i.e. Number of chcked-in nights divided by the total number of nights
  const occupancyRate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
}
