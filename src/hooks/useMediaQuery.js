/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MediaQueries = (scale, size) => {
  const theme = useTheme();
  const matches =
    scale === "up"
      ? useMediaQuery(theme.breakpoints.up(size))
      : useMediaQuery(theme.breakpoints.down(size));
  return matches;
};

export default MediaQueries;
