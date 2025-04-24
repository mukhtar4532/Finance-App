import { DashboardBox } from "@/components/DashboardBox";

type Props = {};

export const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};
