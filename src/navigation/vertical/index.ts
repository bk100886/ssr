// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { CalculatorVariant } from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Статистика',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Логи расчета',
      icon: CalculatorVariant,
      path: '/calculationlogs'
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // },
    {
      sectionTitle: 'Справочники'
    },
    {
      icon: CubeOutline,
      title: 'Страховые компании',
      path: '/inscompanies'
    },
    {
      icon: CubeOutline,
      title: 'Коеффициенты',
      path: '/coefficients'
    },
    {
      icon: CubeOutline,
      title: 'Типы коеффициентов',
      path: '/coefficienttypes'
    },
    {
      icon: CubeOutline,
      title: 'Категории ТС',
      path: '/vehiclecategories'
    },
    {
      icon: CubeOutline,
      title: 'Условия отбора СК',
      path: '/insselectconditions'
    },
    {
      icon: CubeOutline,
      title: 'Типы страхования',
      path: '/instypes'
    },
    {
      icon: CubeOutline,
      title: 'Особые условия ТС',
      path: '/vehiclespecials'
    },
    {
      icon: CubeOutline,
      title: 'Тарифы',
      path: '/tarifs'
    },
    {
      icon: CubeOutline,
      title: 'Регионы',
      path: '/regions'
    },
    {
      icon: CubeOutline,
      title: 'Пользователи',
      path: '/users'
    }    
  ]
}

export default navigation
