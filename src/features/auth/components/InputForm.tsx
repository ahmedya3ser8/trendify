import { useState } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FaExclamation, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface IProps<TFieldValue extends FieldValues> {
  id: string;
  label: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  error: string;
  type?: string;
  passwordConditions?: boolean;
  maskPassword?: boolean;
  readonly?: boolean;
}

const InputForm = <TFieldValue extends FieldValues>({ error, id, label, name, register, type, readonly = false, passwordConditions = false, maskPassword = false }: IProps<TFieldValue>) => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="input_form">
      <div className="floating_label_group">
        <input type={type || (flag ? 'text' : 'password' )} readOnly={readonly} id={id} {...register(name)} className={`floating_input ${error ? 'border-red-500! shadow-none!' : '' }`} placeholder=" " />
        <label htmlFor={id} className={`floating_label ${error ? 'text-red-500!' : '' }`}> {label} </label>
        {maskPassword && (
          <span onClick={() => setFlag(prev => !prev)} className="absolute top-1/2 end-4 -translate-y-1/2"> 
            {flag ? <FaRegEye className="text-gray-700" /> : <FaRegEyeSlash className="text-gray-700" /> } 
          </span>
        )}
      </div>
      <p className="text-sm text-red-500 lowercase mt-1"> {error} </p>
      {passwordConditions && (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button type="button" className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer underline mt-2"> 
              <span className="size-4 bg-black rounded-full text-white flex justify-center items-center">
                <FaExclamation className="text-[10px]" />
              </span>
              password conditions 
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-xs">
                password must contain at least 8 characters
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                include an uppercase letter, a number and special character such as (!@#)'
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu> 
      )}
    </div>
  )
}

export default InputForm;
