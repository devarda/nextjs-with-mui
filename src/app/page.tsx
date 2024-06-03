import { Button, Grid, Stack, Typography } from '@mui/material';

export default function Page() {
  return (
    <Grid
      container
      height='calc(100vh - 38px)'
      alignItems='center'
      justifyContent='center'
      direction='column'
    >
      <Typography variant='h1' style={{ color: '#2532eb' }}>
        Using Material UI with Next.js
      </Typography>
      <Typography variant='h4' style={{ color: '#ef4424' }}>
        (with TypeScript)
      </Typography>
      <Stack mt={2} direction='row' columnGap={1}>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
    </Grid>
  );
}
