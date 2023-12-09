import * as z from "zod";

export const formSchema = z.object({
  BungalowType: z.enum(['Option1', 'Option2', 'Option3']), // Replace with your actual options
  NumberOfFloors: z.number(),
  remotenessFactor: z.number(),
  landRateAtPurchase: z.number(),
  landValueSellFactor: z.number(),
  legalCharge: z.number(),
  fillingRate: z.number(),
  projectManagementCost: z.number(),
  unitFillingDepth: z.number(),
  facingType: z.enum(['OptionA', 'OptionB', 'OptionC']), // Replace with your actual options
  totalLandArea: z.number(),
  totalBuiltUpArea: z.number(),
  baseBuiltUpRate: z.number(),
  currentLandRate: z.number(),
  developmentCharge: z.number(),
  adjustmentFactor: z.number(),
  cornerFactor: z.number(),
  unitAdjustmentFactor: z.number(),
  cornerFacing: z.enum(['CornerOption1', 'CornerOption2', 'CornerOption3']), // Replace with your actual options
  additionalSemiFinishedBuiltup: z.number(),
});
