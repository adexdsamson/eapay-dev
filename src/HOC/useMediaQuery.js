/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const useMediaQueries = (start, end) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between(start, end));
};
