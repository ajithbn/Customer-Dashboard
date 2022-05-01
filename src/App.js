import React, {useState} from 'react'
import StatsContainer from './components/StatsContainer'
import CustomerContainer from './components/CustomerContainer'
import OrderContainer from './components/OrderContainer'
import customerData from './DB/customerData'

const App = (props) => {
  
  const [customers, setCustomers] = useState(customerData)

  return (<div className='container'>
                <h1 className='Display-4'>Customer Dashboard</h1>
                <StatsContainer customers={customers}/>
                <CustomerContainer customers={customers}/>
                <OrderContainer customers={customers}/>
          </div>)
}

export default App