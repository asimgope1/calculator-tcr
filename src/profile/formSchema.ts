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
    errorMap: (issue, ctx) => ({ message: 'choose option' })
  }),
NumberOfFloors: z.string().refine(value => parseInt(value, 10) > 0, {
  message: 'Number of floors must be at least 1.',
}),
remotenessFactor: z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 0 && parsed <= 100;
}, { message: 'Remoteness Factor must be a number between 0 and 100.' }),
landRateAtPurchase: z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 1000;
}, { message: 'Land Rate At Purchase must be at least 1000.' }),

landValueSellFactor: z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 0 && parsed <= 100;
}, { message: 'Land Value Sell Factor must be in between 0 and 100.' }),

legalCharge: z.string().refine((value) => {
    const parsed = parseFloat(value);
    return !isNaN(parsed) && parsed >= 1;
  }, { message: 'Legal Charge Rate must be at least 1.' }),
  
  fillingRate: z.string().refine((value) => {
    const parsed = parseFloat(value);
    return !isNaN(parsed) && parsed >= 1;
  }, { message: 'Filling Rate must be at least 1.' }),
  
  projectManagementCost: z.string().refine((value) => {
    const parsed = parseFloat(value);
    return !isNaN(parsed) && parsed >= 1;
  }, { message: 'Project Management cost must be at least 1.' }),
  
  unitFillingDepth: z.string().refine((value) => {
    const parsed = parseFloat(value);
    return !isNaN(parsed) && parsed >= 1;
  }, { message: 'Unit Filling Depth must be at least 1.' }),
  
  facingType: z.enum(['East', 'West', 'North', 'South'], {
    errorMap: (issue, ctx) => ({ message: 'Invalid facing type selected.' }),
  }),
  
  totalLandArea:z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 50;
}, { message: 'Total Land Area must be at least 50.' }),

  totalBuiltUpArea: z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 50;
}, { message: 'Total BuiltUp Area must be at least 50.' }),

  baseBuiltUpRate:z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 1000;
}, { message: 'Base BuiltUp Rate must be at least 1000.' }),

  currentLandRate:z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 1000;
}, { message: 'Current Land Rate must be at least 1000.' }),

  developmentCharge: z.string().min(1, { message: 'Development Charge must be at least 1.' }),

  adjustmentFactor:  z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 0 && parsed <= 100;
}, { message: 'Adjustment Factor must be in between 0 and 100.' }),

  cornerFactor: z.string().min(0).max(1, { message: 'Corner Factor must be in between 0 and 1.' }),

  unitAdjustmentFactor:z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 0 && parsed <= 100;
}, { message: 'Unit Adjustment Factor must be in between 0 and 100.' }),

  cornerFacing: z.enum(['Yes', 'No'], { errorMap: (issue, ctx) => ({ message: 'choose correct option' }) }),
  additionalSemiFinishedBuiltup: z.string().refine((value) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed >= 50;
}, { message: 'Additional Semi Finished Builtup Area must be at least 50.' }),
});

const validationResult = formSchema.safeParse(initialFieldValues);

if (validationResult.success) {
  console.log("Initial values are valid according to the schema");
} else {
  console.log("Initial values are invalid:", validationResult.error);
}
