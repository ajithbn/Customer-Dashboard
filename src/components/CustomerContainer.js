import React, { useState } from 'react'
import orderTotal from '../helpers/orderTotal'
import uniqCustomer from '../helpers/uniqCustomer'
import Search from './Search'
import CustomerTable from './CustomerTable'

const CustomerContainer = (props) => {
    const { customers } = props
    const [term, setTerm] = useState('')

    const showDetails = (customer) => {
        const customerOrder = customers.filter((cust) => {
            return cust.Phone === customer.Phone
        })
        alert(`
        name - ${customer.Name} 
        order Count - ${customerOrder.length}
        orderTotal - ${orderTotal(customerOrder)}
        `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    
    const onlyUniqCustomers = uniqCustomer(customers)

    const filteredUniqCustomer = () => {
        const result = onlyUniqCustomers.filter((cust) => {
            return cust.Name.toLowerCase().includes(term) || cust.Phone.toString().includes(term)
        })
        return result
    }
    console.log(filteredUniqCustomer())
    return (<div>
            <div className='row mb-3'>
                <div className='col-md-8'>
                    <h2>Listing Customer -{onlyUniqCustomers.length} </h2>  
                </div>
                <div className='col-md-4'>
                    <Search term={term} handleChange={handleChange}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <CustomerTable customers={filteredUniqCustomer()} showDetails={showDetails}/>  
                </div>
            </div>
            
            
            
    </div>)
}

export default CustomerContainer