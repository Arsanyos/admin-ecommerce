import React, { useEffect, useMemo } from 'react'
import { UserAuth } from 'src/context/AuthContext'
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
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import adminAvatar from 'src/assets/images/avatars/man-with-laptop-light.png'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  //context data
  const { products } = Data()
  const { users } = Data()
  let { user_growth } = Data()
  let { products_sold } = Data()
  let { revenue } = Data()
  let { prd_cat } = Data()
  let { newCust } = Data()
  let { recurringCust } = Data()
  //defining functions
  let temp = []
  let cat = []
  let kitchen, mens, kids, electronics
  kitchen = mens = kids = electronics = 0
  cat.push(kitchen, mens, kids, electronics)

  let JAN, FEB, MAR, APR, MAY, JUN, JUL
  JAN = FEB = MAR = JUN = JUL = 1
  APR = MAY = 20
  temp.push(JAN, FEB, MAR, APR, MAY, JUN, JUL)
  function calculate_revenue(x) {
    x.forEach((doc) => {
      revenue += doc.amount
    })
    return revenue
  }
  //FUNCTIONS
  function calculate_new_recurring(x) {
    x.forEach((doc) => {
      if (doc.date.toDate().getYear() < 100) {
        recurringCust++
      } else {
        newCust++
      }
    })
  }
  function calculate_cat(x) {
    x.forEach((doc) => {
      switch (doc.category.toLowerCase()) {
        case 'electronics':
          console.log(doc.category.toLowerCase())
          cat[3]++
          break
        case 'kitchen':
          cat[0]++
          break
        case 'mens':
          cat[1]++
          break
        case 'kids':
          cat[2]++
          break
        default:
          console.log('cat')
      }
    })
    return cat
  }
  function calculate_growth(x) {
    x.forEach((doc) => {
      // console.log(doc)
      switch (doc.date.toDate().getMonth()) {
        case 0:
          temp[0]++
          break
        case 1:
          temp[1]++
          break
        case 2:
          temp[2]++
          break
        case 3:
          temp[3]++
          break
        case 4:
          temp[4]++
          break
        case 5:
          temp[5]++
          break
        case 6:
          temp[6]++
          break
        default:
          temp.log('out of range')
          break
      }
    })
    return temp
  }
  function calculate_most_sold_product(x) {
    x.forEach((doc) => {
      if (doc.posted_before > 15) {
        let product_title = doc.product_name
        let product_price = doc.price
        let views = doc.views
        const obj = {
          Product_title: product_title,
          Product_price: product_price,
          views: views,
          _cellProps: { id: { scope: 'row' } },
        }
        items.push(obj)
        console.log(items)
      } else {
        console.log('not most sold product')
      }
    })
  }
  //DUMMY-DATA
  const columns = [
    { key: 'Product_title', label: 'product_name', _props: { scope: 'col' } },
    { key: 'Product_price', label: 'price', _props: { scope: 'col' } },
    { key: 'views', label: 'views', _props: { scope: 'col' } },
  ]
  const items = []
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressGroupExample1 = [{ title: 'Monday', value1: newCust, value2: recurringCust }]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'En??as Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tade????',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik D??vid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  //  !!!FIX , CHECK IF PRODUCT IS SOLD OR NOT AND COMPUTE FUNCTION
  // function calculateProductsSold(prd) {
  //   prd.forEach((doc) => {
  //     if (doc.status === 'Sold') {
  //       calculate_growth(products)
  //     } else {
  //       console.log('jump')
  //     }
  //   })
  // }
  prd_cat = useMemo(() => calculate_cat(products), [products])
  useMemo(() => calculate_most_sold_product(products), [products])
  useMemo(() => calculate_new_recurring(users), [users])
  useMemo(() => calculate_revenue(users), [users])
  products_sold = useMemo(() => calculate_growth(products), [products])
  user_growth = useMemo(() => calculate_growth(users), [users])
  useEffect(() => {}, [users, products, user_growth, products_sold])
  return (
    <>
      {/* <WidgetsDropdown /> */}
      <CRow>
        <CCol>
          <CRow>
            <CCard style={{ marginBottom: '20px' }}>
              <CCardBody>
                <CCardImage
                  orientation="left"
                  src={adminAvatar}
                  style={{ width: '10rem', height: '8rem', marginBottom: '20px' }}
                />
                <CCardTitle style={{ color: '#3399ff' }}>
                  Congurlations your Admin portal is ready to use!
                </CCardTitle>
                <CCardText>Manage your ecommerce site with ease</CCardText>
                {/* <CButton href="#">Go somewhere</CButton> */}
              </CCardBody>
            </CCard>
          </CRow>
          <CRow>
            <CCol>
              <CCard className="mb-4" style={{ width: '35rem' }}>
                <CCardHeader>Customers information</CCardHeader>
                <CCardBody>
                  <CCol>
                    <CCol xs={12} md={6} xl={11}>
                      <CRow>
                        <CCol sm={6}>
                          <div className="border-start border-start-4 border-start-info py-1 px-3">
                            <div className="text-medium-emphasis small">New Clients</div>
                            <div className="fs-5 fw-semibold">{newCust}</div>
                          </div>
                        </CCol>
                        <CCol sm={6}>
                          <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                            <div className="text-medium-emphasis small">Recurring Clients</div>
                            <div className="fs-5 fw-semibold">{recurringCust}</div>
                          </div>
                        </CCol>
                      </CRow>

                      <hr className="mt-0" />
                      {progressGroupExample1.map((item, index) => (
                        <div className="progress-group mb-4" key={index}>
                          <div className="progress-group-prepend">
                            <span className="text-medium-emphasis small">{item.title}</span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress thin color="info" value={item.value1} />
                            <CProgress thin color="danger" value={item.value2} />
                          </div>
                        </div>
                      ))}
                    </CCol>
                  </CCol>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
        <CCol>
          {' '}
          <CRow>
            <CCol style={{ display: 'flex', justifyContent: 'center' }}>
              <CWidgetStatsA
                style={{ width: '10rem' }}
                className="mb-4"
                color="info"
                value={
                  <>
                    {users.length}
                    <br />
                    <span className="fs-6 fw-normal">
                      (40.9% <CIcon icon={cilArrowTop} />)
                    </span>
                  </>
                }
                title="Users"
                chart={
                  <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'users growth',
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointBackgroundColor: '#39f',
                          data: user_growth,
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawBorder: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          min: -9,
                          max: 50,
                          display: false,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 1,
                        },
                        point: {
                          radius: 4,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>
            <CCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CWidgetStatsA
                style={{ width: '10rem' }}
                className="mb-4"
                color="primary"
                value={
                  <>
                    {products.length}
                    <br />
                    <span className="fs-6 fw-normal">
                      (40.9% <CIcon icon={cilArrowTop} />)
                    </span>
                  </>
                }
                title="products registered"
                chart={
                  <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'products registered',
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointBackgroundColor: '#39f',
                          data: [1, 18, 9, 17, 34, 22, 11],
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawBorder: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          min: -9,
                          max: 39,
                          display: false,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 1,
                        },
                        point: {
                          radius: 4,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>
            <CCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CWidgetStatsA
                style={{ width: '10rem' }}
                className="mb-4"
                color="danger"
                value={
                  <>
                    {revenue}
                    <br />
                    <span className="fs-6 fw-normal">
                      (40.9% <CIcon icon={cilArrowTop} />)
                    </span>
                  </>
                }
                title="Revenue"
                chart={
                  <CChartBar
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                        'January',
                        'February',
                        'March',
                        'April',
                      ],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'rgba(255,255,255,.2)',
                          borderColor: 'rgba(255,255,255,.55)',
                          data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                          barPercentage: 0.6,
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawTicks: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          grid: {
                            display: false,
                            drawBorder: false,
                            drawTicks: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>
            <CCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CWidgetStatsA
                style={{ width: '10rem' }}
                className="mb-4"
                color="warning"
                value={
                  <>
                    $9.000{' '}
                    <span className="fs-6 fw-normal">
                      (40.9% <CIcon icon={cilArrowTop} />)
                    </span>
                  </>
                }
                title="Expenses"
                chart={
                  <CChartLine
                    className="mt-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'rgba(255,255,255,.2)',
                          borderColor: 'rgba(255,255,255,.55)',
                          data: [78, 81, 80, 45, 34, 12, 40],
                          fill: true,
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 2,
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard className="mb-4" style={{ width: '33.5rem', marginBottom: '20px' }}>
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <h4 id="traffic" className="card-title mb-0">
                    Products sold
                  </h4>
                  <div className="small text-medium-emphasis">January - July</div>
                </CCol>
              </CRow>
              <CChartLine
                style={{ height: '300px', marginTop: '40px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'Products sold',
                      backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                      borderColor: getStyle('--cui-info'),
                      pointHoverBackgroundColor: getStyle('--cui-info'),
                      borderWidth: 2,
                      data: products_sold,
                      fill: true,
                    },
                    // {
                    //   label: 'My Second dataset',
                    //   backgroundColor: 'transparent',
                    //   borderColor: getStyle('--cui-success'),
                    //   pointHoverBackgroundColor: getStyle('--cui-success'),
                    //   borderWidth: 2,
                    //   data: [
                    //     random(50, 200),
                    //     random(50, 200),
                    //     random(50, 200),
                    //     random(50, 200),
                    //     random(50, 200),
                    //     random(50, 200),
                    //     random(50, 200),
                    //   ],
                    // },
                    // {
                    //   label: 'My Third dataset',
                    //   backgroundColor: 'transparent',
                    //   borderColor: getStyle('--cui-danger'),
                    //   pointHoverBackgroundColor: getStyle('--cui-danger'),
                    //   borderWidth: 1,
                    //   borderDash: [8, 5],
                    //   data: [65, 65, 65, 65, 65, 65, 65],
                    // },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250,
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </CCardBody>
            <CCardFooter>{/*   */}</CCardFooter>
          </CCard>
        </CCol>
        <CCol>
          <CCard style={{ display: 'flex', alignItems: 'center', height: '22rem', width: '30rem' }}>
            <CCardBody>
              <CRow>
                <CCol sm={20}>
                  <h4 id="traffic" className="card-title mb-0" style={{ color: '' }}>
                    Items listed by category
                  </h4>
                </CCol>
              </CRow>
            </CCardBody>
            <CChartDoughnut
              style={{ width: '15rem', height: '20rem' }}
              borderAlign="center"
              data={{
                labels: ['Kitchen appliances', 'Kids', 'Mens ware', 'Electronics'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: prd_cat,
                  },
                ],
              }}
            />
          </CCard>
        </CCol>
      </CRow>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol></CCol>
        <CCol>
          <CCard className="mb-4" style={{ width: '30rem', position: 'relative', right: '240px' }}>
            <CCardHeader>Most sold products</CCardHeader>
            <CCardBody>
              <CTable columns={columns} items={items} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
