# toOrdinal

This project provides a function `toOrdinal` that returns a number in its full ordinal form. The function supports both English and Portuguese languages.

## Interface

The function `toOrdinal` takes an object of type `toOrdinalProps` as its argument. The `toOrdinalProps` interface is defined as follows:

```typescript
interface toOrdinalProps {
  input: number;
  gender?: "a" | "o";
  uppercase?: boolean;
  language?: "pt" | "en";
}
```

## Parameters

- `input`: A number for which you want to get the ordinal form. It should be an integer and must be between 0 and 999 inclusive.
- `gender`: (Optional) A string that can be either 'a' or 'o'. It is used for Portuguese language to define the gender of the ordinal number. The default value is 'o'.
- `uppercase`: (Optional) A boolean that indicates whether the output should be in uppercase. The default value is false.
- `language`: (Optional) A string that can be either 'pt' or 'en'. It defines the language of the ordinal number. The default value is 'en'.

## Errors

The function throws an error in the following cases:

- If `input` is not an integer.
- If `input` is less than 0 or greater than 999.

## Returns

The function returns a string which is the number in its ordinal form.
