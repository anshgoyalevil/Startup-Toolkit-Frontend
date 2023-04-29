import React from "react";
import { Container, Grid, SimpleGrid } from '@mantine/core';
import LeftPanel from "../Fragments/GSTCalculatorFragments/LeftPanel";
import { GSTHeader } from "../Fragments/GSTCalculatorFragments/GSTHeader";
import RightPanel from "../Fragments/GSTCalculatorFragments/RightPanel";


function GSTCalculator() {  
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
