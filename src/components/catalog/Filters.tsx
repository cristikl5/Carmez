import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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

  // Watch individual form values for real-time updates
  const meatType = watch("meatType");
  const productCategory = watch("productCategory");
  const expirationDate = watch("expirationDate");
  const newProduct = watch("newProduct");
  const prevValuesRef = useRef<string>("");
  const isInitialMount = useRef(true);

  // Trigger filter updates in real-time when values change
  useEffect(() => {
    // Skip initial mount to avoid triggering on component mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const currentValues = JSON.stringify({
      meatType,
      productCategory,
      expirationDate,
      newProduct,
    });

    // Only trigger if values actually changed (not just a new object reference)
    if (currentValues !== prevValuesRef.current && onFiltersChange) {
      prevValuesRef.current = currentValues;
      onFiltersChange({
        meatType,
        productCategory,
        expirationDate,
        newProduct,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meatType, productCategory, expirationDate, newProduct]);

  // Handle form submission (apply filters) - kept for compatibility
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
      <div className="flex items-center justify-between bg-white py-4 sm:py-6 px-4 sm:px-7 rounded-[18px] flex-col gap-4 lg:flex-row">
        <div className="flex items-center gap-4 sm:gap-6 flex-col lg:flex-row w-full lg:w-auto">
          <div className="w-full lg:w-auto">
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2 block">
              {t("filters.meatType")}
            </Label>
            <Controller
              name="meatType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full lg:min-w-[180px] border-gray-400 h-12 sm:h-10">
                    <SelectValue placeholder={t("filters.pork")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="porc">{t("filters.pork")}</SelectItem>
                    <SelectItem value="vita">{t("filters.beef")}</SelectItem>
                    <SelectItem value="pui">{t("filters.chicken")}</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="w-full lg:w-auto">
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2 block">
              {t("filters.productCategory")}
            </Label>
            <Controller
              name="productCategory"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full lg:min-w-[232px] border-gray-400 h-12 sm:h-10">
                    <SelectValue placeholder={t("filters.productCategory")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crenvursti-safalade">
                      {t("filters.crenvurstiSafalade")}
                    </SelectItem>
                    <SelectItem value="fiert">{t("filters.fiert")}</SelectItem>
                    <SelectItem value="sunci">{t("filters.sunci")}</SelectItem>
                    <SelectItem value="semi-afumat">
                      {t("filters.semiAfumat")}
                    </SelectItem>
                    <SelectItem value="fiert-afumat">
                      {t("filters.fiertAfumat")}
                    </SelectItem>
                    <SelectItem value="crud-afumat">
                      {t("filters.crudAfumat")}
                    </SelectItem>
                    <SelectItem value="delicatese">
                      {t("filters.delicatese")}
                    </SelectItem>
                    <SelectItem value="alte-produse">
                      {t("filters.alteProduse")}
                    </SelectItem>
                    <SelectItem value="conserve">
                      {t("filters.conserve")}
                    </SelectItem>
                    <SelectItem value="produse-vegetale">
                      {t("filters.produseVegetale")}
                    </SelectItem>
                    <SelectItem value="carne-fresh">
                      {t("filters.carneFresh")}
                    </SelectItem>
                    <SelectItem value="marinade">
                      {t("filters.marinade")}
                    </SelectItem>
                    <SelectItem value="cirnaciori-mici">
                      {t("filters.cirnacioriMici")}
                    </SelectItem>
                    <SelectItem value="snackz-stickz">
                      {t("filters.snackzStickz")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="w-full lg:w-auto">
            <Label className="text-xs text-gray-400 font-medium font-lato mb-2 block">
              {t("filters.expirationDate")}
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
                  className="w-full lg:w-[300px]"
                />
              )}
            />
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <span>2 {t("filters.months")}</span>
              <span className="font-semibold">
                {formatValue(expirationDate || 0)}
              </span>
              <span>5 {t("filters.years")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap w-full lg:w-auto justify-center lg:justify-start">
            <Controller
              name="newProduct"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  id="newProduct"
                  checked={value}
                  onCheckedChange={onChange}
                  className="w-5 h-5 sm:w-4 sm:h-4"
                />
              )}
            />
            <Label
              htmlFor="newProduct"
              className="text-sm text-gray-600 font-lato cursor-pointer"
            >
              {t("filters.newProduct")}
            </Label>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Button
            type="button"
            variant="outline"
            className="w-full lg:w-auto h-12 sm:h-10 text-sm"
            onClick={handleReset}
          >
            {t("filters.reset")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
