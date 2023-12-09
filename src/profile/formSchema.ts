import * as z from "zod";

export const formSchema = z.object({
  BungalowType: z.enum(['Raw', 'Economy', 'Delux'],{
    errorMap: (issue, ctx) => ({ message: 'Choose Your option' })
  }),
  NumberOfFloors: z.number({
    errorMap: (issue, ctx) => ({ message: 'Number of floors must be atleast 1.' })
  }),
  remotenessFactor: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Remoteness Factor must be in between 0 and 1.' })
  })),
  landRateAtPurchase: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Rate At Purchase must be least 1000.' })
  })),
  landValueSellFactor: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  legalCharge: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  fillingRate: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  projectManagementCost: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  unitFillingDepth: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  facingType: z.enum(['OptionA', 'OptionB', 'OptionC'],({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })), 
  totalLandArea: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  totalBuiltUpArea: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  baseBuiltUpRate: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  currentLandRate: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  developmentCharge: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  adjustmentFactor: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  cornerFactor: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  unitAdjustmentFactor: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
  cornerFacing: z.enum(['CornerOption1', 'CornerOption2', 'CornerOption3'],({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })), 
  additionalSemiFinishedBuiltup: z.number(({
    errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' })
  })),
});
