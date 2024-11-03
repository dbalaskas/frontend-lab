export const isYupFieldRequired = (schema: any, fieldName: string) => {
  const field = schema.field[fieldName];
  return field?.tests.some((test: any) => test.OPTIONS.name === 'required') || false;
};
