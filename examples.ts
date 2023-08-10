import { JSONArray, JSONObject, JSONValue } from './src/json-types'

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
