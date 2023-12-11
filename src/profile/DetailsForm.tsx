import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form";
import { Input } from "../@/components/ui/input";
import { z } from "zod";
import { formSchema } from "./formSchema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";

interface DetailsFormProps {
  onSubmit: (data: any) => void;
}
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

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

  

const DetailsForm: React.FC<DetailsFormProps> = ({ onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(
      Object.keys(formSchema.shape).map((key) => [key, ""])
    ),
  });
  const handleIncrement = (fieldName: string) => {
    const currentValue = form.getValues(fieldName);
    const parsedValue = parseInt(currentValue, 10);
    const incrementedValue = isNaN(parsedValue) ? 0 : parsedValue + 1;
    form.setValue(fieldName, incrementedValue.toString());
  };

  const handleDecrement = (fieldName: string) => {
    const currentValue = form.getValues(fieldName);
    const parsedValue = parseInt(currentValue, 10);
    const decrementedValue =
      !isNaN(parsedValue) && parsedValue > 0 ? parsedValue - 1 : 0;
    form.setValue(fieldName, decrementedValue.toString());
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex ">
          <div className=" w-1/2 flex flex-col space-y-4 ml-10 items-start justify-start">
            {/* Left-aligned form items */}
            <FormField
              control={form.control}
              name="BungalowType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bungalow Type</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="NumberOfFloors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number Of Floors</FormLabel>
                  <FormControl>
                    <div className="flex ">
                      <Input {...initialFieldValues} {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("NumberOfFloors")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("NumberOfFloors")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remotenessFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remoteness Factor</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("remotenessFactor")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("remotenessFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="landRateAtPurchase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Rate at Purchase</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("landRateAtPurchase")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("landRateAtPurchase")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="landValueSellFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land value sell factor</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("landValueSellFactor")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("landValueSellFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="legalCharge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legal Charge</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("legalCharge")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("legalCharge")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fillingRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filling Rate</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("fillingRate")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("fillingRate")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectManagementCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Management Cost</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("projectManagementCost")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("projectManagementCost")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unitFillingDepth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Filling Depth</FormLabel>
                  <FormControl>
                  <div className="flex ">
                      <Input placeholder="shadcn" {...field} />
               
                      <Button
                        type="button"
                        onClick={() => handleDecrement("unitFillingDepth")}
                      >
                        -
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncrement("unitFillingDepth")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>facing Type</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className=" w-1/2 flex flex-col space-y-4 mr-10 items-end justify-end">
            <FormField
              control={form.control}
              name="totalBuiltUpArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Land Area (Sq. Ft.)</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="baseBuiltUpRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total BuiltUp Area (Sq. Ft.)</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentLandRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base BuiltUp Rate</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentLandRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current land rate as per market</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="developmentCharge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Development Charge</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustmentFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Factor</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cornerFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Corner Factor</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unitAdjustmentFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Adjustment Factor</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cornerFacing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Corner Facing</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalSemiFinishedBuiltup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Semi Finished </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <Button
            type="button"
            onClick={() => form.reset()}
            className="bg-red-500 items-center justify-center"
          >
            Reset
          </Button>

          <Button type="submit" className="bg-green-500">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DetailsForm;
