import { UnifiedApi } from '@climatepartner/climatepartner-api-sdk'
import { IFormulaPublic } from '@climatepartner/climatepartner-api-sdk/gen/interface/components/i-formula-public'

export async function getFormulas(climatePartnerApi: UnifiedApi) {
  const calculation = climatePartnerApi.getCalculationService()
  return await calculation
    .getFormulas()
    .then(formulas => formulas.map(mapFormula))
}

type SimpleFormula = {
  name: string
  inputParameters: string[]
}
function mapFormula(formula: IFormulaPublic): SimpleFormula {
  return {
    name: formula.name,
    inputParameters: formula.inputParameters?.map(
      inputParameter => inputParameter.name,
    ) || [],
  }
}
