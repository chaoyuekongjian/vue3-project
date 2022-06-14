import path from 'path-browserify';

export function isExternalLink(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function resolveRoutePath(basePath: string, routePath: any) {
  console.log(basePath, routePath, path.resolve(basePath, routePath))
  if (isExternalLink(routePath)) return routePath
  if (isExternalLink(basePath)) return basePath
  return basePath ? path.resolve(basePath, routePath) : routePath
}
