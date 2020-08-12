import domains from "./domains.ts";

export interface DomainInfo {
  /** name of the domain in English */
  name: string;
  xn: string;
  type:
    | "generic"
    | "country-code"
    | "sponsored"
    | "infrastructure"
    | "generic-restricted"
    | "test";
  manager: string;
}

/**
 * Check if the domain is valid.
 * @param domain
 */
export function isValid(domain: string): boolean {
  return domains.findIndex((x) => x[0] === domain) !== -1;
}

/**
 * get an array with all the domains supported
 */
export function getAllDomains(): string[] {
  return domains.map((x) => x[0]);
}

export function getDomainInfo(domain: string): DomainInfo | null {
  for (let x of domains) {
    if (x[0] === domain) {
      return {
        name: x[0],
        xn: x[1],
        type: x[2],
        manager: x[3],
      };
    }
  }

  return null;
}
