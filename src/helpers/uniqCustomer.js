import _ from 'lodash'

const uniqCustomer = (customers) => {
    const result = _.uniqBy(customers, 'Phone')
    //console.log(result)
    return result
}

export default uniqCustomer