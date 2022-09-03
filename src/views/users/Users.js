import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardText,
  CCardTitle,
  CCardImage,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsE,
  CWidgetStatsC,
} from '@coreui/react'
import { CChartLine, CChartBar, CChartDoughnut } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilArrowTop,
  cilChartPie,
} from '@coreui/icons'

import avatar3 from 'src/assets/images/avatars/3.jpg'
function Users() {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    // {
    //   key: 'profile-picture ',
    //   label: '',
    //   _props: { scope: 'col' },
    // },
    {
      key: 'username',
      label: 'Username',
      _props: { scope: 'col' },
    },
    {
      key: 'recentpurchase',
      label: 'Recent purchase',
      _props: { scope: 'col' },
    },
    {
      key: 'gender',
      label: 'Gender',
      _props: { scope: 'col' },
    },
    {
      key: 'moneyspent',
      label: 'Total money spent',
      _props: { scope: 'col' },
    },
    {
      key: 'userstatus',
      label: 'Status',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      username: 'Mark',
      recentpurchase: 'Samsung 50 inch Curve TV',
      gender: 'Male',
      moneyspent: '250',
      userstatus: 'Active',
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <CRow>
        <CTable columns={columns} items={items} />
      </CRow>
      <CRow>
        <CCol>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilChartPie} height={36} />}
            progress={{ color: 'primary', value: 75 }}
            text="Widget helper text"
            title="Joined through Facebook"
            value="89.9%"
          />
        </CCol>
        <CCol>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilChartPie} height={36} />}
            progress={{ color: 'success', value: 75 }}
            text="Widget helper text"
            title="Joined through Twitter"
            value="89.9%"
          />
        </CCol>
        <CCol>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilChartPie} height={36} />}
            progress={{ color: 'danger', value: 75 }}
            text="Widget helper text"
            title="Joined through Instagram"
            value="89.9%"
          />
        </CCol>
        <CCol>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilChartPie} height={36} />}
            progress={{ color: 'info', value: 75 }}
            text="Widget helper text"
            title="Joined through Instagram"
            value="89.9%"
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Users