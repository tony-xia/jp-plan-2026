import type { Address } from "./schema";

function queryString(address: Address): string {
  const ja = address.full.ja;
  return ja.startsWith("日本") ? ja : `日本 ${ja}`;
}

function amapQueryString(address: Address): string {
  const zh = address.full.zh;
  return zh.startsWith("日本") ? zh : `日本 ${zh}`;
}

export function appleMapsUrl(address: Address): string {
  return `https://maps.apple.com/?q=${encodeURIComponent(queryString(address))}`;
}

export function googleMapsUrl(address: Address): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryString(address))}`;
}

export function amapUrl(address: Address): string {
  return `https://uri.amap.com/search?keyword=${encodeURIComponent(amapQueryString(address))}`;
}
