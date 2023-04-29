import React from "react";
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

function GSTCalculator() {
    const theme = useMantineTheme();
  
    return (
      <Container my="md">
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    );
}

export default GSTCalculator;
