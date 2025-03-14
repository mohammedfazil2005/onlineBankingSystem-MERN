import React from 'react'
import './HomeAdminDashboard.css'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts';





const HomeAdminDashboard = () => {

    return (
        <div className='home-dashboard-parent'>
            <div className="heading-dashboard">
                <h1>Dashboard</h1>
            </div>
            <div className="header-admin-dashboard">
                <div className='header-admin-dashboard-left'>
                    <div className="header-admin-dashboard-main-box">
                        <img src="https://png.pngtree.com/png-vector/20190302/ourmid/pngtree-analytics-icon-design-template-vector-isolated-png-image_745937.jpg" alt="" />
                        <div className="header-admin-box-details">
                            <div>
                                <h5>Total balance</h5>
                                <h1>₹2699</h1>
                            </div>
                            <div>
                                <PieChart
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: 10, label: 'series A' },
                                                { id: 1, value: 15, label: 'series B' },

                                            ]

                                        },
                                    ]}
                                    width={220}
                                    height={100}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="header-admin-dashboard-main-box">
                        <img src="https://png.pngtree.com/png-vector/20190302/ourmid/pngtree-analytics-icon-design-template-vector-isolated-png-image_745937.jpg" alt="" />
                        <div className="header-admin-box-details">
                            <div>
                                <h5>Total balance</h5>
                                <h1>₹2699</h1>
                            </div>
                            <div>
                                <PieChart
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: 10, label: 'series A' },
                                                { id: 1, value: 15, label: 'series B' },

                                            ]

                                        },
                                    ]}
                                    width={220}
                                    height={100}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-admin-dashboard-right'>
                    <h1>Recent Updates</h1>
                    <div className='upadates-box-parent'>
                        <img src="https://png.pngtree.com/png-vector/20190302/ourmid/pngtree-analytics-icon-design-template-vector-isolated-png-image_745937.jpg" alt="" />
                        <div>
                            <h5>Mike Tyson <span>recived ₹300 from ajantha mendis</span></h5>
                            <p>2 Minutes Ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin-chart-parent">
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    width={800}
                    height={300}
                />
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
