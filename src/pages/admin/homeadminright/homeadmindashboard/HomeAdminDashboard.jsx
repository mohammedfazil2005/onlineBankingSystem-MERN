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
                    series={[
                        { data: [35, 44, 24, 34] },
                        { data: [51, 6, 49, 30] },
                        { data: [15, 25, 30, 50] },
                        { data: [60, 50, 15, 25] },
                    ]}
                    height={290}
                    xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
            </div>
        </div>
    )
}

export default HomeAdminDashboard
