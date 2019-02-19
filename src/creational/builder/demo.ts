import { ApiRequestBuilder } from '.';

const getRequest = new ApiRequestBuilder()
  .withUrl('projects')
  .withMethod('GET')
  .withHeaders({ 'Content-Type': 'application/json' })
  .withQueryParams({ sort: '+name' })
  .build();

getRequest.makeRequest();

console.log('---------------------');

const postRequest = new ApiRequestBuilder()
  .withUrl('orders')
  .withMethod('POST')
  .withHeaders({ 'Content-Type': 'application/json' })
  .withBody({ name: 'Best Order' })
  .build();

postRequest.makeRequest();
