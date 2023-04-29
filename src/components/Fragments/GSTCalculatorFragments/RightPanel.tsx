import { Card, Title, createStyles, rem, Text } from "@mantine/core";
import { ToggleButton } from "./ToggleButton";
import { AmountInput } from "./AmountInput";
import { GSTRateSlider } from "./GSTRateSlider";
import { ProfitRatioInput } from "./ProfitRatioInput";
import GetGSTRegButton from "./GetGSTRegButton";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  title: {
    fontWeight: 800,
    fontSize: rem(22),
    paddingTop: rem(12),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(14),
      textAlign: "left",
    },
  },
  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },
}));

export default function RightPanel() {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section p="md">
        <Title className={classes.title}>
        Total cost of{" "}
          <Text component="span" className={classes.highlight} inherit>
            Selling
          </Text>{" "}
        </Title>
      </Card.Section>
      <hr></hr>
      <Card.Section p="md">
        <Title className={classes.title}>
        Total{" "}
          <Text component="span" className={classes.highlight} inherit>
            GST
          </Text>{" "}
        </Title>
      </Card.Section>
      <hr></hr>
      <Card.Section p="md">
        <Title className={classes.title}>
        Total{" "}
          <Text component="span" className={classes.highlight} inherit>
            Profit
          </Text>{" "}
        </Title>
      </Card.Section>
      <Card.Section p="md">
        <a href="https://startupkro.com" target="blank"><GetGSTRegButton size="1.2rem" p="md" fullWidth>Get GST Registration</GetGSTRegButton></a>
      </Card.Section>
    </Card>
  );
}
