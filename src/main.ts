// import { ClimatePartnerApi } from '../../unified-api/src/sdk/public/typescript/src'
import { ClimatePartnerApi } from '@climatepartner/climatepartner-api-sdk'
import dotenv from 'dotenv'
import {
  calculateTransportEmissions,
} from './calculation/transportEmissions'
import { calculateRoadDistance, calculateAirDistance } from './calculation/distance'
import { getFormulas } from './calculation/getFormulas'

dotenv.config({
  path: `.env`,
})

console.log('Hello World')

const climatePartnerApi = new ClimatePartnerApi({
  longtermToken: process.env['LONG_TERM_TOKEN']!,
  endpointUrl: process.env['UNIFIED_API_URL'],
})

;(async () => {
  console.log(await calculateTransportEmissions(climatePartnerApi))
  console.log(await calculateRoadDistance(climatePartnerApi))
  console.log(await calculateAirDistance(climatePartnerApi))
  console.log(await getFormulas(climatePartnerApi))
})()
