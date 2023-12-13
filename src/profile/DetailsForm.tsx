import React, { useEffect, useState } from "react";
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

const DetailsForm: React.FC<DetailsFormProps> = ({ onSubmit }) => {
  const [numberOfFloors, setNumberOfFloors] = React.useState("1");
  const [remotenessFactor, setremotenessfactor] = useState("");
  const [landRateAtPurchase, setlandRateAtPurchase] = useState("");
  const [landValueSellFactor, setlandValueSellFactor] = useState("");
  const [legalCharge, setlegalCharge] = useState("");
  const [fillingRate, setfillingRate] = useState("");
  const [projectManagementCost, setprojectManagementCost] = useState("");
  const [unitFillingDepth, setunitFillingDepth] = useState("");
  const [totalLandArea, settotalLandArea] = useState("");
  const [totalBuiltUpArea, settotalBuiltUpArea] = useState("");
  const [baseBuiltUpRate, setbaseBuiltUpRate] = useState("");
  const [currentLandRate, setcurrentLandRate] = useState("");
  const [developmentCharge, setdevelopmentCharge] = useState("");
  const [adjustmentFactor, setadjustmentFactor] = useState("");
  const [cornerFactor, setcornerFactor] = useState("");
  const [unitAdjustmentFactor, setunitAdjustmentFactor] = useState("");
  const [additionalSemiFinishedBuiltup, setadditionalSemiFinishedBuiltup] =
    useState("");
  const [totalLandPrice, settotalLandPrice] = useState("");
  const [subTotal, setsubTotal] = useState("");

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

  const calculateLandPrice = (): number | string => {
    return isNaN(parseInt(totalLandArea)) || isNaN(parseFloat(currentLandRate))
      ? ""
      : parseInt(totalLandArea) * parseFloat(currentLandRate);
  };

  const calculateSubTotal = (): number | string => {
    return isNaN(parseInt(totalLandArea)) ||
      isNaN(parseFloat(currentLandRate)) ||
      isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalLandArea) * parseFloat(currentLandRate) +
          parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate);
  };

  const calculateFacingCharge = (): number | string => {
    return isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate) * 0.05;
  };

  const remotenesscharge = (): number | string => {
    return isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate) * 0.05;
  };

  const projectadjustmentcharge = (): number | string => {
    return isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate) * 0.05;
  };

  const unitadjustmentfactor = (): number | string => {
    return isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate) * 0.05;
  };

  const BuildingPrice = (): number | string => {
    return isNaN(parseInt(totalBuiltUpArea)) ||
      isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) * parseFloat(baseBuiltUpRate) * 0.05;
  };

  const CornerCharge=(): number |string =>{

return isNaN(parseInt(totalBuiltUpArea)) ||
isNaN(parseFloat(baseBuiltUpRate))
  ? ""
  : parseInt(totalBuiltUpArea) *
    parseFloat(baseBuiltUpRate) *
    0.05
    
  }
  const FillingCharge=(): number |string =>{
    return isNaN(parseInt(totalBuiltUpArea)) ||
    isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) *
        parseFloat(baseBuiltUpRate) *
        0.05

  }
  const ProjectManagementCost =(): number |string =>{
    return isNaN(parseInt(totalBuiltUpArea)) ||
    isNaN(parseFloat(baseBuiltUpRate))
      ? ""
      : parseInt(totalBuiltUpArea) *
        parseFloat(baseBuiltUpRate) *
        0.05

  }

  const { BungalowType, facingType, cornerFacing } = formSchema.shape;

  const renderDropdownMenu = (fieldName: string, options: string[]) => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-between w-full">
          <Input
            placeholder="Type here"
            {...form.register(fieldName)}
            className=""
          ></Input>
          {/* <Button>{form.getValues(fieldName) || "Select Type"}</Button> */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="
      w-max"
      >
        {options.map((option, index) => (
          <DropdownMenuItem
            className="bg-gray-600 justify-start text-white"
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
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 mt-5 ml-5 mr-5">
          <div className="flex flex-col space-y-4 items-start justify-start">
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
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("NumberOfFloors")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("NumberOfFloors")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("NumberOfFloors")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.NumberOfFloors?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("remotenessFactor")}
                      />
                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("remotenessFactor")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("remotenessFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.remotenessFactor?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("landRateAtPurchase")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("landRateAtPurchase")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("landRateAtPurchase")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.landRateAtPurchase?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("landValueSellFactor")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("landValueSellFactor")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("landValueSellFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.landValueSellFactor?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("legalCharge")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("legalCharge")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("legalCharge")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.legalCharge?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("fillingRate")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("fillingRate")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("fillingRate")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.fillingRate?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("projectManagementCost")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("projectManagementCost")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("projectManagementCost")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.projectManagementCost?.message ??
                      ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("unitFillingDepth")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("unitFillingDepth")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("unitFillingDepth")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.unitFillingDepth?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.facingType?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
            <FormField
              control={form.control}
              name="totalLandArea"
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
                          form.trigger("totalLandArea");
                        }}
                        onBlur={() => form.trigger("totalLandArea")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("totalLandArea")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("totalLandArea")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.totalLandArea?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
            <FormField
              control={form.control}
              name="totalBuiltUpArea"
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
                          form.trigger("totalBuiltUpArea");
                        }}
                        onBlur={() => form.trigger("totalBuiltUpArea")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("totalBuiltUpArea")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("totalBuiltUpArea")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.totalBuiltUpArea?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
            <FormField
              control={form.control}
              name="baseBuiltUpRate"
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
                          form.trigger("baseBuiltUpRate");
                        }}
                        onBlur={() => form.trigger("baseBuiltUpRate")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("baseBuiltUpRate")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("baseBuiltUpRate")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.baseBuiltUpRate?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("currentLandRate")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("currentLandRate")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("currentLandRate")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.currentLandRate?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("developmentCharge")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("developmentCharge")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("developmentCharge")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.developmentCharge?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("adjustmentFactor")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("adjustmentFactor")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("adjustmentFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.adjustmentFactor?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("cornerFactor")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("cornerFactor")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("cornerFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.cornerFactor?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() => form.trigger("unitAdjustmentFactor")}
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() => handleDecrement("unitAdjustmentFactor")}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() => handleIncrement("unitAdjustmentFactor")}
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.unitAdjustmentFactor?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.cornerFacing?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-4 items-start justify-start">
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
                        onBlur={() =>
                          form.trigger("additionalSemiFinishedBuiltup")
                        }
                      />

                      <Button
                        className="bg-gray-300 ml-2"
                        type="button"
                        onClick={() =>
                          handleDecrement("additionalSemiFinishedBuiltup")
                        }
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-300 ml-2 mr-2"
                        type="button"
                        onClick={() =>
                          handleIncrement("additionalSemiFinishedBuiltup")
                        }
                      >
                        +
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-600">
                    {form.formState.errors?.additionalSemiFinishedBuiltup
                      ?.message ?? ""}
                  </FormMessage>
                </FormItem>
              )}
            />
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

          <Button
            type="submit"
            className="bg-green-500"
            onClick={form.handleSubmit((data) => {
              console.log("------", data);
              setNumberOfFloors(data.NumberOfFloors);
              setremotenessfactor(data.remotenessFactor);
              setlandRateAtPurchase(data.landRateAtPurchase);
              setlandValueSellFactor(data.landValueSellFactor);
              setlegalCharge(data.legalCharge);
              setfillingRate(data.fillingRate);
              setprojectManagementCost(data.projectManagementCost);
              setunitFillingDepth(data.unitFillingDepth);
              settotalLandArea(data.totalLandArea);
              settotalBuiltUpArea(data.totalBuiltUpArea);
              setbaseBuiltUpRate(data.baseBuiltUpRate);
              setcurrentLandRate(data.currentLandRate);
              setdevelopmentCharge(data.developmentCharge);
              setadjustmentFactor(data.adjustmentFactor);
              setcornerFactor(data.cornerFactor);
              setunitAdjustmentFactor(data.unitAdjustmentFactor);
              setadditionalSemiFinishedBuiltup(
                data.additionalSemiFinishedBuiltup
              );
              settotalLandPrice(data.totalLandPrice);
              setsubTotal(data.subTotal);
            })}
          >
            Submit
          </Button>
        </div>

        <div className="w-full flex items-center  bg-gray-100 border-t-2 border-gray-200">
          <div className="flex justify-between w-full mt-4 mb-4">
            <div className="w-1/2 ml-10">
              <div className="flex flex-col justify-between">
                <div className="text-gray-600">
                  Land Price: {calculateLandPrice()}
                </div>

                <div className="text-gray-600">
                  Sub Total: {calculateSubTotal()}
                </div>

                <div className="text-gray-600">
                  Facing Charge: {calculateFacingCharge()}
                </div>

                <div className="text-gray-600">
                  Remoteness Charge :{remotenesscharge()}
                </div>

                <div className="text-gray-600">
                  Project Adjustment Charge :{projectadjustmentcharge()}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col justify-between">
                <div className="text-gray-600">
                  Unit Adjustment Factor :{unitadjustmentfactor()}
                </div>

                <div className="text-gray-600">
                  Building Price :{BuildingPrice()}
                </div>

                <div className="text-gray-600">
                  Corner Charge :
                  {
                    CornerCharge()
                  }
                </div>

                <div className="text-gray-600">
                  Filling Charge :
                  {
                    FillingCharge()
                  }
                </div>

                <div className="text-gray-600">
                  Project Management Cost :
                  {
                    ProjectManagementCost()
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center  bg-gray-100 border-t-2 border-gray-200">
          Grand Total:
          {totalLandPrice}
        </div>
      </form>
    </Form>
  );
};

export default DetailsForm;
