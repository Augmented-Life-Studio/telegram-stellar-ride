export const translation = (key: string, t?: (value: any) => string, customValue?: string): string => {
  if (t) return t(key)
  return customValue || key
}
