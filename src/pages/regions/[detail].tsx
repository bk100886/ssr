// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useRouter } from 'next/router'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'

const RegionDetail = () => {
  const router = useRouter()
  const { detail } = router.query

  if(!Number.isInteger(Number(detail))){
    return (<></>)
  }
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={"Detail "+detail} titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
    </Grid> 
  )
}



export default RegionDetail
