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
      <Typography variant='h1' style={{ color: '#2563eb' }}>
        Using Material UI with Next.js
      </Typography>
      <Typography variant='h4' style={{ color: '#ef4444' }}>
        (with TypeScript)
      </Typography>
      <Stack direction='row' columnGap={1}>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
    </Grid>
  );
}
