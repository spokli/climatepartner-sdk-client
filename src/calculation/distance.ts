import { UnifiedApi } from '@climatepartner/climatepartner-api-sdk'
import { ITypeWaypoint } from '@climatepartner/climatepartner-api-sdk/gen/interface/components/enumeration/i-type-waypoint'
import { IMeansOfTravelOptionsDistanceCalculationRequest } from '@climatepartner/climatepartner-api-sdk/gen/interface/components/interface/enumeration/i-means-of-travel-options-distance-calculation-request'

export async function calculateAirDistance(climatePartnerApi: UnifiedApi) {
  const calculation = climatePartnerApi.getCalculationService()

  const airDistanceRequest = {
    waypoints: [
      { type: ITypeWaypoint.airport, iata: 'MUC' },
      { type: ITypeWaypoint.airport, iata: 'BER' },
    ],
    options: {
      meansOfTravel: IMeansOfTravelOptionsDistanceCalculationRequest.air,
    },
  }
  return await calculation.calculateDistance(airDistanceRequest)
}

export async function calculateRoadDistance(climatePartnerApi: UnifiedApi) {
  const calculation = climatePartnerApi.getCalculationService()

  const roadDistanceRequest = {
    waypoints: [
      { type: ITypeWaypoint.address, address: 'St.-Martin-Straße 59, 81669 München' },
      { type: ITypeWaypoint.address, address: 'Sonnenallee 223, 12059 Berlin' },
    ],
    options: {
      meansOfTravel: IMeansOfTravelOptionsDistanceCalculationRequest.road,
    },
  }
  return await calculation.calculateDistance(roadDistanceRequest)
}
