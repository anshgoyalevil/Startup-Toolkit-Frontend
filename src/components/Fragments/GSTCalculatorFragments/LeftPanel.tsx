import { Card, createStyles, rem } from "@mantine/core";
import { ToggleButton } from "./ToggleButton";
import { AmountInput } from "./AmountInput";
import { GSTRateSlider } from "./GSTRateSlider";
import { ProfitRatioInput } from "./ProfitRatioInput";

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
}));

export default function LeftPanel() {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section p="sm">
        <ToggleButton />
      </Card.Section>
      <Card.Section p="md">
        <AmountInput />
      </Card.Section>
      <Card.Section p="md">
        <GSTRateSlider />
      </Card.Section>
      <Card.Section pb="md" pl="md" pr="md" pt="sm">
        <ProfitRatioInput />
      </Card.Section>
    </Card>
  );
}
