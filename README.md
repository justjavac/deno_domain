# deno_domain

[![tag](https://img.shields.io/github/release/justjavac/deno_domain)](https://github.com/justjavac/deno_domain/releases)
[![Build Status](https://github.com/justjavac/deno_domain/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_domain/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_domain)](https://github.com/justjavac/deno_domain/blob/master/LICENSE)

Get all the [top-level domains](https://www.iana.org/domains/root/db), including gTLDs such as `.com`, and country-code TLDs such as `.uk`.

## Usage

All domain code:

```ts
import domains from "https://deno.land/x/domain/domains.ts";

console.log(domains)
```

output:

```ts
[
  [".aaa", ".aaa", "generic", "American Automobile Association, Inc."],
  [".aarp", ".aarp", "generic", "AARP"],
  [".abarth", ".abarth", "generic", "Fiat Chrysler Automobiles N.V."],
  [".abb", ".abb", "generic", "ABB Ltd"],
  ...
  ...
```

Check if the domain code is valid:

```ts
import { isValid } from "https://deno.land/x/domain/mod.ts";

isValid(".com"); // true
isValid(".cn"); // true
isValid(".zzzzz"); // false
```

Get an array with all the domain codes supported:

```ts
import { getAlldomainCode } from "https://deno.land/x/domain/mod.ts";

getAlldomainCode(); // [".aaa", ".aarp", ".abarth", ..., ...]
```

Get domainInfo:

```ts
import { getdomainInfo } from "https://deno.land/x/domain/mod.ts";

getdomainInfo(".com");
// { name: ".com", xn: ".com", type: "generic", manager: "VeriSign Global Registry Services" }

getdomainInfo(".中国");
// { name: ".中国", xn: ".xn--fiqs8s", type: "country-code", manager: "China Internet Network Information Center (CNNIC)" }

getdomainInfo(".zzzz");
// null
```

### License

[deno_domain](https://github.com/justjavac/deno_domain) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.