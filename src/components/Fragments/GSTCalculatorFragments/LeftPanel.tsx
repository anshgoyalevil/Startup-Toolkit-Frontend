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

interface LeftPanelProps {
  toggle: boolean;
  setToggle: any;
  cost: any;
  setCost: any;
  rate: any;
  setRate: any;
  profitRatio: any;
  setProfitRatio: any;
}

export default function LeftPanel({
  toggle,
  setToggle,
  cost,
  setCost,
  rate,
  setRate,
  profitRatio,
  setProfitRatio,
}: LeftPanelProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section p="sm">
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </Card.Section>
      <Card.Section p="md">
        <AmountInput cost={cost} setCost={setCost} />
      </Card.Section>
      <Card.Section p="md">
        <GSTRateSlider rate={rate} setRate={setRate} />
      </Card.Section>
      <Card.Section pb="md" pl="md" pr="md" pt="sm">
        <ProfitRatioInput profitRatio={profitRatio} setProfitRatio={setProfitRatio} toggle={toggle} />
      </Card.Section>
    </Card>
  );
}
