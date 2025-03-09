import { Rule } from 'antd/es/form';

type FieldType = 'password';

export const getFieldsRules = (fieldType: FieldType) => {
  const rules: Record<FieldType, Rule[]> = {
    password: [
      {
        pattern:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
        message:
          'Password must be at least 8 characters long, include a letter, a number, and a special character.',
      },
    ],
  };

  return rules[fieldType];
};
