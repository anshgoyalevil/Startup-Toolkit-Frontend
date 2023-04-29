import React from "react";
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import LeftPanel from "../Fragments/GSTCalculatorFragments/LeftPanel";
import { GSTHeader } from "../Fragments/GSTCalculatorFragments/GSTHeader";
import RightPanel from "../Fragments/GSTCalculatorFragments/RightPanel";

const PRIMARY_COL_HEIGHT = rem(300);

function GSTCalculator() {
    const theme = useMantineTheme();
  
    return (
      <Container my="md">
        <GSTHeader/>
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <LeftPanel/>
          <Grid gutter="md">
            <Grid.Col>
              <RightPanel/>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    );
}

export default GSTCalculator;
