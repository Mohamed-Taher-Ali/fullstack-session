import {
  ValidationOptions,
  registerDecorator,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isPasswordStrong', async: false })
export class IsPasswordStrongConstraint
  implements ValidatorConstraintInterface
{
  validate(password: string, args: ValidationArguments): boolean {
    if (typeof password !== 'string') return false;

    return this.getFailedConstraints(password).length === 0;
  }

  defaultMessage(args: ValidationArguments): string {
    const password = args.value;
    const failedConstraints = this.getFailedConstraints(password);

    return failedConstraints.join(',');
  }

  private getFailedConstraints(password: string): string[] {
    const errors: string[] = [];

    if (!/^.{8,}$/.test(password)) {
      errors.push('at least 8 characters long');
    }
    if (!/[a-zA-Z]/.test(password)) {
      errors.push('contain at least one letter');
    }
    if (!/\d/.test(password)) {
      errors.push('contain at least one number');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('contain at least one special character');
    }

    return errors;
  }
}

export function IsPasswordStrong(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      constraints: [],
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsPasswordStrongConstraint,
    });
  };
}
