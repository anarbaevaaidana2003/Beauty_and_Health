import { FormikProps } from 'formik';
import cn from 'classnames';
import css from './index.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerInput = ({
  name,
  label,
  formik,
  maxWidth,
}: {
  name: string;
  label: string;
  formik: FormikProps<any>;
  maxWidth?: number;
}) => {
  const value = formik.values[name] ? new Date(formik.values[name]) : null;
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];
  const invalid = !!touched && !!error;
  const disabled = formik.isSubmitting;

  // Кастомный инпут с лейблом внутри
  const CustomInput = ({ value, onClick }: { value: string; onClick: () => void }) => (
    <div className={css.inputWrapper}>
      <label className={cn(css.label, { [css.invalid]: invalid })}>{label}</label>
      <input
        type="text"
        value={value}
        onClick={onClick} // Важно, чтобы при клике открывался календарь
        className={cn(css.input, { [css.invalid]: invalid })}
      />
    </div>
  );

  return (
    <div className={cn(css.container, { [css.disabled]: disabled })} style={{ maxWidth }}>
      <DatePicker
        selected={value}
        onChange={(date) => formik.setFieldValue(name, date)}
        onBlur={() => formik.setFieldTouched(name)}
        customInput={<CustomInput value={formik.values[name]} onClick={() => {}} />}
        dateFormat="yyyy-MM-dd"
        disabled={disabled}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  );
};
