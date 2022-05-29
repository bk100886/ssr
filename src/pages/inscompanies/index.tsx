// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'

const InsCompanies = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Страховые компании' titleTypographyProps={{ variant: 'h6' }} />
          {/* <TableBasic /> */}
        </Card>
      </Grid>
    </Grid> 
  )
}

export default InsCompanies
