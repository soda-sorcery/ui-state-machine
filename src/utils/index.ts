

export interface EnumValues {
  [key: number]: string;
}

export function getValuesFromEnum(enumToMap: EnumValues): string[] {
  const map = Object.keys(enumToMap).map(s => s);
  return map;
}