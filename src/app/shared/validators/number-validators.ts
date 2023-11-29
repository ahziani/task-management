import { AbstractControl, ValidatorFn } from "@angular/forms";

export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const isNotNumber = isNaN(control.value);

        return isNotNumber ? { 'notNumber': { value: control.value } } : null;
    };
}
