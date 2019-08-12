# Generates Virtual Contact File formatted text.

## Usage

Script generates [RFC 2426](https://tools.ietf.org/html/rfc2426) version 3.0 vCard text from string input.

The `VCF.html` file has 2 inputs: name and phone number. Entering both and clicking GENERATE will initiate download of a `.vcf` file. Clicking DISPLAY will show the text below the form.

Script currently only supports VCF's `N`, `FN` and `TEL` fields. `TEL` automatically marks phone numbers as `CELL`.

`genVCF` takes an object with 2 properties, `name` and `number`.

`name` is formatted with last name first: `Roe, Ronald`

`number` accepts most phone number format strings, and strips out all spaces, dashes, parentheses and plus signs.

```
// Example
let vData = {
  name: 'Roe, Ronald`,
  number: '1234567890` // Accepts most common phone number formats.
}
```

## Plans

  - Add support for all RFC 2426 fields
  - Allow user to opt to bypass phone number character stripping
  - Support more complex names (not just **lastname, firstname**)
  - Allow display name (`FN`) to be defined separate from standard name field (`N`)
  - Conversion of images to data URI for inclusion
  - ES6 OOP rewrite