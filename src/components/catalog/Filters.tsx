import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../ui/Button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";

const filtersFormSchema = z.object({
  meatType: z.string().optional(),
  productCategory: z.string().optional(),
  expirationDate: z.number().optional(),
  newProduct: z.boolean().optional(),
});

type FiltersFormData = z.infer<typeof filtersFormSchema>;

interface FiltersProps {
  onFiltersChange?: (filters: FiltersFormData) => void;
  onReset?: () => void;
}

const Filters = ({ onFiltersChange, onReset }: FiltersProps) => {
  const { handleSubmit, control, watch, reset } = useForm<FiltersFormData>({
    resolver: zodResolver(filtersFormSchema),
    defaultValues: {
      meatType: "",
      productCategory: "",
      expirationDate: 0,
      newProduct: false,
    },
  });

  const formatValue = (months: number) => {
    if (months < 12) {
      return `${months} luni`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} ani`;
      } else {
        return `${years} ani ${remainingMonths} luni`;
      }
    }
  };

  // Watch all form values for real-time updates
  const watchedValues = watch();

  // Handle form submission (apply filters)
  const onSubmit = (data: FiltersFormData) => {
    if (onFiltersChange) {
      onFiltersChange(data);
    }
  };

  // Handle reset
  const handleReset = () => {
    reset();
    if (onReset) {
      onReset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between bg-white py-6 px-7 rounded-[18px]">
        <div className="flex items-center gap-6">
          <div>
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2">
              Tipul de carne
            </Label>
            <Controller
              name="meatType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full sm:min-w-[180px] border-gray-400">
                    <SelectValue placeholder="Carne de porc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="porc">Carne de porc</SelectItem>
                    <SelectItem value="vita">Carne de vita</SelectItem>
                    <SelectItem value="pui">Carne de pui</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2">
              Categorie de produse
            </Label>
            <Controller
              name="productCategory"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full sm:min-w-[232px] border-gray-400">
                    <SelectValue placeholder="Carnat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="carnat">Carnat</SelectItem>
                    <SelectItem value="ciorba">Ciorba de burta</SelectItem>
                    <SelectItem value="conserve">Conserve</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2">
              Data de expirare a produsului
            </Label>
            <Controller
              name="expirationDate"
              control={control}
              render={({ field }) => (
                <Slider
                  defaultValue={[0]}
                  max={60}
                  value={[field.value || 0]}
                  min={2}
                  onValueChange={value => field.onChange(value[0])}
                  step={1}
                  className="min-w-[300px]"
                />
              )}
            />
            <div className="mt-3 flex items-center justify-between">
              <span>2 Luni</span>
              <span>{formatValue(watchedValues.expirationDate || 0)}</span>
              <span>5 Ani</span>
            </div>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Controller
              name="newProduct"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  id="newProduct"
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
            <Label
              htmlFor="newProduct"
              className="text-sm text-gray-600 font-lato"
            >
              Produs nou
            </Label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline" onClick={handleReset}>
            Resetare
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
