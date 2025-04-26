import { DashboardBox } from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

export const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};
