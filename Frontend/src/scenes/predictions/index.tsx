import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

type Props = {};

export const Predictions = (props: Props) => {
  const { palette } = useTheme();
  return <Box color={palette.grey[300]}>Predictions</Box>;
};
