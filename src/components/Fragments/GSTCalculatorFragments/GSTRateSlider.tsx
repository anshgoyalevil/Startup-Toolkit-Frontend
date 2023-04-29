import { useState } from 'react';
import { createStyles, NumberInput, Slider, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: rem(22),
    paddingBottom: rem(3),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },

  slider: {
    position: 'absolute',
    width: '100%',
    bottom: rem(-1),
  },

  thumb: {
    width: rem(16),
    height: rem(16),
  },

  track: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
}));

export function GSTRateSlider() {
  const { classes } = useStyles();
  const [value, setValue] = useState<number | ''>(5);
  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={value}
        onChange={setValue}
        label="Enter GST Rate (In %)"
        placeholder="5%"
        step={1}
        min={0}
        max={28}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
      />
      <Slider
        max={28}
        step={1}
        min={0}
        label={null}
        value={value === '' ? 0 : value}
        onChange={setValue}
        size={2}
        radius={0}
        className={classes.slider}
        classNames={{ thumb: classes.thumb, track: classes.track }}
      />
    </div>
  );
}