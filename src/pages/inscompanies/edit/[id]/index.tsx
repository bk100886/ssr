// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useRouter } from 'next/router'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'

const InsCompanyEdit = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={"Detail "+id} titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
    </Grid> 
  )
}



export default InsCompanyEdit
