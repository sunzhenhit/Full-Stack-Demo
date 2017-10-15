import axios from 'axios';



export function getItemsByCompanyName(companyName) {
  return axios.get('http://localhost:3002/api/items/companyName/'+companyName)
    .then(response => response.data);
}

export function getItemsByCustomerAddress(customerAddress) {
  return axios.get('http://localhost:3002/api/items/customerAddress/'+customerAddress)
    .then(response => response.data);
}

export function getItems(companyName,customerAddress) {
  
  var url ='http://localhost:3002/api/items/companyName/'+companyName+'/customerAddress/'+customerAddress;
 // console.log(url);

  return axios.get(url)
    .then(response => response.data);
}

export function getItemsOrder() {
  return axios.get('http://localhost:3002/api/items/order')
    .then(response => response.data);
}


export function deleteItem(orderId) {
 // console.log(orderId);
  return axios.delete('http://localhost:3002/api/item',{
    data: {'orderId':orderId}
  });
}

