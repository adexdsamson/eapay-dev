import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@material-ui/lab";
import { Fastfood } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const ActivityTimeline = ({ data }) => {
  return (
    <Timeline>
      {data.map((item) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Fastfood />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
            <Typography variant="body2" color="textSecondary">
              9:30 am
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ActivityTimeline;
