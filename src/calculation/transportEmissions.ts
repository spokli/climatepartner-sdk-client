import { UnifiedApi } from '@climatepartner/climatepartner-api-sdk'

export async function calculateTransportEmissions(
  climatePartnerApi: UnifiedApi,
) {
  const calculation = climatePartnerApi.getCalculationService()

  return await calculation.transportTotalEmissions({
    input: simpleSchemaRequest,
  })

  /*
  This is the same as
    return await calculation.calculate(
      { formulaName: 'transportTotalEmissions' },
      { input: simpleSchemaRequest },
  */
}

const simpleSchemaRequest = {
  elements: {
    cargo: {
      attributes: {
        weight: 2,
        unit: 'ton',
      },
    },
    section: [
      {
        elements: {
          route: {
            elements: {
              departure: {
                elements: {
                  cityName: {
                    attributes: {
                      name: 'Beijing',
                      country: 'CN',
                    },
                  },
                },
              },
              destination: {
                elements: {
                  cityName: {
                    attributes: {
                      name: 'München',
                      country: 'de',
                    },
                  },
                },
              },
            },
          },
          carriage: {
            elements: {
              mainCarriage: {
                elements: {
                  road: {},
                },
              },
            },
          },
        },
      },
    ],
  },
}
