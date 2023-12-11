import * as z from "zod";



const initialFieldValues = {
  bungalowType: "",
  numberOfFloors: "1",
  remotenessFactor: "0.0",
  landRateAtPurchase: "1000",
  landValueSellFactor: "0.0",
  legalCharge: "1",
  fillingRate: "1",
  projectManagementCost: "1",
  unitFillingDepth: "1",
  facingType: "",
  totalLandArea: "50",
  totalBuiltUpArea: "50",
  baseBuiltUpRate: "1000",
  currentLandRate: "1000",
  developmentCharge: "1",
  adjustmentFactor: "0.0",
  cornerFactor: "0.0",
  unitAdjustmentFactor: "0.0",
  cornerFacing: "",
  additionalSemiFinishedBuiltup: "50",
};




export const formSchema = z.object({
  BungalowType: z.enum(['Raw', 'Economy', 'Delux'], {
    errorMap: (issue, ctx) => ({ message: '' })
  }),
  NumberOfFloors: z.string().min(1, { message: 'Number of floors must be at least 1.' }),
  remotenessFactor: z.string().min(0).max(1, { message: 'Remoteness Factor must be in between 0 and 1.' }),
  landRateAtPurchase: z.number({ errorMap: (issue, ctx) => ({ message: 'Land Rate At Purchase must be at least 1000.' }) }),
  landValueSellFactor: z.number({ errorMap: (issue, ctx) => ({ message: 'Land Value Sell Factor must be in between 0 and 1.' }) }),
  legalCharge: z.number({ errorMap: (issue, ctx) => ({ message: 'Legal Charge Rate must be at least 1.' }) }),
  fillingRate: z.number({ errorMap: (issue, ctx) => ({ message: 'Filling Rate must be at least 1.' }) }),
  projectManagementCost: z.number({ errorMap: (issue, ctx) => ({ message: 'Project Management cost must at least 1.' }) }),
  unitFillingDepth: z.number({ errorMap: (issue, ctx) => ({ message: 'Unit Filling Depth cost at least 1.' }) }),
  facingType: z.enum(['East', 'West', 'North', 'South'], { errorMap: (issue, ctx) => ({ message: '' }) }),
  totalLandArea: z.number({ errorMap: (issue, ctx) => ({ message: 'Total Land Area must be at least 50.' }) }),
  totalBuiltUpArea: z.number({ errorMap: (issue, ctx) => ({ message: 'Total BuiltUp Area must be at least 50.' }) }),
  baseBuiltUpRate: z.number({ errorMap: (issue, ctx) => ({ message: 'Base BuiltUp Rate must be at least 1000.' }) }),
  currentLandRate: z.number({ errorMap: (issue, ctx) => ({ message: 'Current Land Rate must be at least 1000.' }) }),
  developmentCharge: z.string({ errorMap: (issue, ctx) => ({ message: 'Development Charge must be at least 1.' }) }),
  adjustmentFactor: z.string().min(0).max(1, { message: 'Adjustment Factor must be in between 0 and 1.' }),
  cornerFactor: z.number().min(0).max(1, { message: 'Corner Factor must be in between 0 and 1.' }),
  unitAdjustmentFactor: z.number().min(0).max(1, { message: 'Unit Adjustment Factor must be in between 0 and 1.' }),
  cornerFacing: z.enum(['Yes', 'No'], { errorMap: (issue, ctx) => ({ message: '' }) }),
  additionalSemiFinishedBuiltup: z.number({ errorMap: (issue, ctx) => ({ message: 'Additional Semi Finished Builtup Area must be at least 50.' }) }),
});

const validationResult = formSchema.safeParse(initialFieldValues);

if (validationResult.success) {
  console.log("Initial values are valid according to the schema");
} else {
  console.log("Initial values are invalid:", validationResult.error);
}
