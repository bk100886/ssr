// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import { CardContent } from '@mui/material'
import Link from 'next/link'

const InsCompanies = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Страховые компании' titleTypographyProps={{ variant: 'h6' }} />
          {/* <TableBasic /> */}
          <CardContent>
            
            <Link passHref href="/inscompanies/edit/1">Перейти на конкретную компанию</Link>
            <br/>
            <Link passHref href="/inscompanies/create">создать</Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid> 
  )
}

export default InsCompanies
