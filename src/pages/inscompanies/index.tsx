// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'

// ** Demo Components Imports
import { CardContent } from '@mui/material'
import Link from 'next/link'

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const InsCompanies = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Страховые компании' titleTypographyProps={{ variant: 'h6' }} />
          {/* <TableBasic /> */}
          <CardContent>
            
            <Link passHref href='/inscompanies/edit/1'>
              <LinkStyled>Перейти на конкретную компанию</LinkStyled>
            </Link>
            <br/>
            <Link passHref href='/inscompanies/create'>
              <LinkStyled>Создать</LinkStyled>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid> 
  )
}

export default InsCompanies
