export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
}

export function keysToCamelCase<T extends Record<string, any>>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((v) => keysToCamelCase(v)) as any;
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((acc: any, key) => {
      acc[toCamelCase(key)] = keysToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}
