import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../@/components/ui/form';
import { Input } from '../@/components/ui/input';
import { z } from 'zod';
import { formSchema } from './formSchema';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../@/components/ui/dropdown-menu';

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
    defaultValues: Object.fromEntries(Object.keys(formSchema.shape).map((key) => [key, ''])),
  });

  return (

<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ width: '45%' }}>
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
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalBuiltUpArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Land Area (Sq. Ft.)</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage className ='text-red-600'/>

            </FormItem>
          )}
        />
    </div>
    <div style={{ width: '45%' }}>


      <FormField
        control={form.control}
        name="baseBuiltUpRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total BuiltUp Area (Sq. Ft.)</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
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
            <FormDescription>
            </FormDescription>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="additionalSemiFinishedBuiltup"
        render={({ field }) => (
          <FormItem>
            <FormLabel>


Additional Semi Finished </FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />
      
    </div>
  </div>
  <Button type="submit" className='bg-blue-500 items-center justify-center'>Submit</Button>
</form>
</Form>

  );
};

export default DetailsForm;
