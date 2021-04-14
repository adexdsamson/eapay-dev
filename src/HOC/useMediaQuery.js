/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const useMediaQueries = (start, end) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between(start, end));
};

export default function useMediaQueryOptions(scale, size) {
  const theme = useTheme();
  return scale === 'down' ? useMediaQuery(theme.breakpoints.down(size)) : useMediaQuery(theme.breakpoints.up(size))
}