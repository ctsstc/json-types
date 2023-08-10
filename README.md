# json-types

Stop using `any` for JSON typing, use `JSONObject` instead.

I'm tired of creating these types between projects, this can be easily reused between projects so I can finally stop creating this boilerplate code.

Looks like this may have originated from:

- <https://dev.to/ankittanna/how-to-create-a-type-for-complex-json-object-in-typescript-d81>

> Same great taste, but now includes `null` as a value too.

## Installation

```bash
npm i github:ctsstc/json-types
```

## Usage

Can also be found in `examples.ts`.

```typescript
import { JSONArray, JSONObject, JSONValue } from "./json-types";

const someJson: JSONObject = {
  foo: "bar",
  baz: 123,
  qux: {
    quux: true,
  },
  nothing: null,
};

const recordBased: Record<string, JSONValue> = {
  foo: "bar",
  baz: 123,
  qux: {
    quux: true,
  },
  nothing: null,
};

const jsonArray: JSONArray = [someJson, recordBased];
```
