import React from 'react'
import StatsItem from './StatsItem'
import orderTotal from '../helpers/orderTotal'
import uniqCustomer from '../helpers/uniqCustomer'

const StatsContainer = (props) => {
    const { customers } = props
    const orderCount = customers.length

    //uniqCustomer()
    return (
        <div className='row mb-3 mt-3'>
            <StatsItem count={orderCount} text='order'/>  
            <StatsItem count={orderTotal(customers)} text='amount'/>
            <StatsItem count={uniqCustomer(customers).length} text='Customers'/>  
        </div>
    )
}

export default StatsContainer