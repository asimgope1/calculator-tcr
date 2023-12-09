import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from './formSchema';

const DetailsForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(Object.keys(formSchema.shape).map((key) => [key, ''])),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const formItems = Object.keys(formSchema.shape);

  const leftItems = formItems.slice(0, Math.ceil(formItems.length / 2));
  const rightItems = formItems.slice(Math.ceil(formItems.length / 2));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="flex">
        <div className="w-1/2 pr-4">
          {leftItems.map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block mb-1 font-bold">{key}</label>
              {typeof formSchema.shape[key as keyof typeof formSchema.shape] === 'object' &&
              (formSchema.shape[key as keyof typeof formSchema.shape] as any).kind === 'enum' ? (
                <select {...register(key)} id={key} className="w-full p-2 border rounded">
                  {/* Replace with actual options */}
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                </select>
              ) : (
                <input
                  {...register(key)}
                  id={key}
                  type={
                    (formSchema.shape[key as keyof typeof formSchema.shape] as any).kind === 'number'
                      ? 'number'
                      : 'text'
                  }
                  className="w-full p-2 border rounded"
                />
              )}
              {errors[key] && <span className="text-red-500 text-xs">{errors[key]?.message}</span>}
            </div>
          ))}
        </div>
        <div className="w-1/2 pl-4">
          {rightItems.map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block mb-1 font-bold">{key}</label>
              {typeof formSchema.shape[key as keyof typeof formSchema.shape] === 'object' &&
              (formSchema.shape[key as keyof typeof formSchema.shape] as any).kind === 'enum' ? (
                <select {...register(key)} id={key} className="w-full p-2 border rounded">
                  {/* Replace with actual options */}
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                </select>
              ) : (
                <input
                  {...register(key)}
                  id={key}
                  type={
                    (formSchema.shape[key as keyof typeof formSchema.shape] as any).kind === 'number'
                      ? 'number'
                      : 'text'
                  }
                  className="w-full p-2 border rounded"
                />
              )}
              {errors[key] && <span className="text-red-500 text-xs">{errors[key]?.message}</span>}
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default DetailsForm;
