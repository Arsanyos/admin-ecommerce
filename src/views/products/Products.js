import React, { useEffect, useMemo } from 'react'
import { Data } from 'src/context/DbContext'
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
function Products() {
  const columns = [
    // {
    //   key: 'id',
    //   label: '#',
    //   _props: { scope: 'col' },
    // },
    // {
    //   key: 'profile-picture ',
    //   label: '',
    //   _props: { scope: 'col' },
    // },
    {
      key: 'name',
      label: 'Product',
      _props: { scope: 'col' },
    },
    {
      key: 'price',
      label: 'Price',
      _props: { scope: 'col' },
    },
    {
      key: 'cat',
      label: 'Category',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'views',
      label: 'no of views',
      _props: { scope: 'col' },
    },
  ]
  const items = []
  let { products } = Data()
  function getProducts(x) {
    x.forEach((doc) => {
      let obj = {
        name: doc.product_name,
        price: doc.price,
        cat: doc.category,
        status: doc.status,
        views: doc.views,
        _cellProps: { id: { scope: 'row' } },
      }
      items.push(obj)
    })
  }
  useMemo(() => getProducts(products), [products])
  return (
    <>
      <CRow>
        <CTable columns={columns} items={items} />
      </CRow>
    </>
  )
}
export default Products
