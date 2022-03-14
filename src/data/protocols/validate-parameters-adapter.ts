export interface ValidateParametersAdapter {
  validate: (input: any) => Promise<void>;
}
