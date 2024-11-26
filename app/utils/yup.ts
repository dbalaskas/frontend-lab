export const isYupFieldRequired = (schema: any, fieldName: string) => {
  const field = schema.fields[fieldName];
  return field?.tests.some((test: any) => test.OPTIONS.name === 'required') || false;
};
