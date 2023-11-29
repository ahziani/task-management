import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateFromTodayValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new Date(control.value) < new Date(new Date().setHours(0, 0, 0, 0));
      return forbidden ? { 'dateFromToday': { value: 'error' } } : null;
    };
}
