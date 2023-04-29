import { createStyles, Switch, Group, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    display: "flex",
    alignItems: "center",
  },

  track: {
    width: rem(40),
    height: rem(15),
    overflow: "visible",
  },

  thumb: {
    width: rem(20),
    height: rem(20),
    left: rem(-2),
    transition: "background-color 100ms ease, left 100ms ease",

    "input:checked + * > &": {
      backgroundColor: theme.fn.primaryColor(),
    },
  },
}));
interface ToggleProps {
  toggle: boolean;
  setToggle: any;
}
export function ToggleButton({ toggle, setToggle }: ToggleProps) {
  const { classes } = useStyles();
  return (
    <Group position="center" pl="md" pt="md" pr="md">
      GST Exclusive
      <Switch
        label=""
        classNames={classes}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      GST Inclusive
    </Group>
  );
}
