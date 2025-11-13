import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../services/dashboard/DashboardFilter";
import DashboardLayout from "../services/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
