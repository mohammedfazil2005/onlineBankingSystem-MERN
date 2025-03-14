import React, { useState } from 'react'
import './HomeAdminDashboard.css'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts';

const HomeAdminDashboard = () => {
    const [state,setState]=useState({
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        
        
      
    })

    return (
        <div className='home-dashboard-parent'>
            <div className="heading-dashboard">
                <h1>Dashboard</h1>
            </div>
            <div className="header-admin-dashboard">
                <div className='header-admin-dashboard-left'>
                    
                   
                </div>
               
            </div>
            <div className="admin-chart-parent" style={{width:"100%"}}>
                
            </div>
            <div className="admin-recent-transactions">
            <div className="user-transaction-history-full">
                <div className="user-transaction-history-list-heading">
                    <h2>Transaction history</h2>
                    {/* <button>Apply filter</button> */}
                </div>

            <div className="user-transaction-list">
            <p>#</p>
            <p>Transactions</p>
            <p>Amount</p>
            <p>Status</p>
            <p>Date</p>
            <p>Details</p>
        </div>
        <div className="user-transaction-list">
            <p>1</p>
            <p>Kumar</p>
            <p>200</p>
            <p>Processing</p>
            <p>Wed 11:00pm</p>
           <button>Details</button>
        </div>
            </div>
            </div>
        </div>
    )
}

export default HomeAdminDashboard
