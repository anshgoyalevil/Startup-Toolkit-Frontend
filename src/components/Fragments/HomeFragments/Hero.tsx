import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(1)} ${rem(12)}`,
    },
  }));
  
  export function Hero() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>modern</span> Startup <br /> tools library
              </Title>
              <Text color="dimmed" mt="md">
              Are you looking for an easy way to calculate your investments online? Get a clear picture of your financial future, with just a few clicks. Check out now and start investing like a pro!
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>GST Calculator</b> - Effortlessly compute GST, ensuring compliance and saving time with accurate calculations for all products and services.
                </List.Item>
                <List.Item>
                  <b>ITR Calculator</b> - A useful online tool for accurately computing income tax liability, deductions, and refunds based on the latest tax laws and regulations. It simplifies tax planning and compliance.
                </List.Item>
                <List.Item>
                  <b>EPF Calculator</b> - Estimate your Employees' Provident Fund (EPF) contribution, interest, and balance effortlessly with the user-friendly EPF Calculator.
                </List.Item>
              </List>
  
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  StartupKro
                </Button>
              </Group>
            </div>
            <Image src={'https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg'} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }
