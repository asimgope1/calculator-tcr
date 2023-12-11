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
import { watch, watchFile } from "fs";

interface DetailsFormProps {
  onSubmit: (data: any) => void;
}
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

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

  const { BungalowType, facingType, cornerFacing } = formSchema.shape;

  const renderDropdownMenu = (fieldName: string, options: string[]) => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className="flex items-center justify-between w-full"
        
        >
        <Input
          placeholder="Type here"
          {...form.register(fieldName)}
          className=""
        
        >
        </Input>
        {/* <Button>{form.getValues(fieldName) || "Select Type"}</Button> */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
      className="
      w-max"
      
      >
        {options.map((option, index) => (
          <DropdownMenuItem
          className="bg-gray-300 justify-start"
          
            key={index}
            onClick={() => form.setValue(fieldName, option)}
          >
            {option}
            
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-grow flex-col space-y-4 ml-10 ">
            {/* Left-aligned form items */}
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="BungalowType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bungalow Type</FormLabel>
                    <FormControl>
                      <div>
                      {renderDropdownMenu(
                        "BungalowType",
                        Object.values(BungalowType._def.values)
                      )}
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="NumberOfFloors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number Of Floors</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("NumberOfFloors");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="remotenessFactor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remoteness Factor</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("remotenessFactor");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="landRateAtPurchase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Land Rate at Purchase</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("landRateAtPurchase");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="landValueSellFactor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Land value sell factor</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("landValueSellFactor");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="legalCharge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Legal Charge</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("legalCharge");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="fillingRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Filling Rate</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("fillingRate");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="projectManagementCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Management Cost</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("projectManagementCost");
                          }}
                        />

                        <Button
                          type="button"
                          onClick={() =>
                            handleDecrement("projectManagementCost")
                          }
                        >
                          -
                        </Button>
                        <Button
                          type="button"
                          onClick={() =>
                            handleIncrement("projectManagementCost")
                          }
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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="unitFillingDepth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Filling Depth</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("unitFillingDepth");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="facingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>facing Type</FormLabel>
                    <FormControl>
                      <div>
                    
                      {renderDropdownMenu(
                        "facingType",
                        Object.values(facingType._def.values)
                      )}
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex  flex-grow flex-col space-y-4 mr-10 ">
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="totalBuiltUpArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Land Area (Sq. Ft.)</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("totalBuiltUpArea");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="baseBuiltUpRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total BuiltUp Area (Sq. Ft.)</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("baseBuiltUpRate");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="currentLandRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base BuiltUp Rate</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("currentLandRate");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="currentLandRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current land rate as per market</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("currentLandRate");
                          }}
                        />

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
            </div>
            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="developmentCharge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Development Charge</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("developmentCharge");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="adjustmentFactor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adjustment Factor</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("adjustmentFactor");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="cornerFactor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Corner Factor</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("cornerFactor");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="unitAdjustmentFactor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Adjustment Factor</FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("unitAdjustmentFactor");
                          }}
                        />

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
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="cornerFacing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Corner Facing</FormLabel>
                    <FormControl>
                      <div>
                      {renderDropdownMenu(
                        "cornerFacing",
                        Object.values(cornerFacing._def.values)
                      )}
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex h-30 flex-col space-y-4 items-start justify-start">
              <FormField
                control={form.control}
                name="additionalSemiFinishedBuiltup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Semi Finished </FormLabel>
                    <FormControl>
                      <div className="flex ">
                        <Input
                          placeholder="Type here"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.trigger("additionalSemiFinishedBuiltup");
                          }}
                        />

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
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 justify-center">
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
