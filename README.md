# @voxpelli/remark-preset

[![npm version](https://img.shields.io/npm/v/@voxpelli/remark-preset.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/remark-preset)
[![npm downloads](https://img.shields.io/npm/dm/@voxpelli/remark-preset.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/remark-preset)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat\&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/voxpelli/remark-preset)

My personal [remark](https://github.com/remarkjs/remark) preset – used to lint and format all the markdown files I work on.

## Install

```bash
npm install --save-dev @voxpelli/remark-preset
```

To use the npm scripts below, also install [`remark-cli`](https://github.com/remarkjs/remark/tree/main/packages/remark-cli) as a dev dependency:

```bash
npm install --save-dev remark-cli
```

## Usage

Add a `remarkConfig` to your `package.json`:

```json
{
  "remarkConfig": {
    "plugins": ["@voxpelli/remark-preset"]
  }
}
```

Optionally add these scripts to your `package.json` (requires [`remark-cli`](https://www.npmjs.com/package/remark-cli)):

```json
{
  "scripts": {
    "check:md": "remark .",
    "fix:md": "remark . -o"
  }
}
```

`check:md` lints all markdown files. `fix:md` additionally rewrites them in place with normalised formatting.

Or use the preset programmatically:

```js
import { remark } from 'remark';
import voxpelliRemarkPreset from '@voxpelli/remark-preset';

const file = await remark()
  .use(voxpelliRemarkPreset)
  .process('# Hello\n\nSome _content_ here.\n');

console.log(String(file));
```

## Checks

* extends [`remark-preset-lint-recommended`](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-recommended) and [`remark-preset-lint-consistent`](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-consistent)
* enforces `*` for unordered list item bullets
* checks [broken local links](https://github.com/remarkjs/remark-validate-links)
* supports [GFM](https://github.com/remarkjs/remark-gfm) (tables, strikethrough, task lists, etc.)
* supports [YAML frontmatter](https://github.com/remarkjs/remark-frontmatter)

## Formatting

When used with `--output` (e.g. `remark . -o`), the preset also normalises markdown output:

* list bullets: `*`
* emphasis: `_`, strong: `**`
* horizontal rules: `-`
* code blocks: fenced with `` ` ``
* list item indent: one space

## API

This package exports no named identifiers. The default export is `voxpelliRemarkPreset`, a [`Preset`](https://github.com/unifiedjs/unified#preset) for [unified](https://github.com/unifiedjs/unified).

## Similar modules

* [`remark-preset-lint-consistent`](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-consistent) – rules that enforce consistency across a document
* [`remark-preset-lint-recommended`](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-recommended) – rules that prevent mistakes or syntactic ambiguities
* [`remark-preset-wooorm`](https://github.com/wooorm/remark-preset-wooorm) – personal markdown style by Titus Wormer

## See also

* [`remark-cli`](https://www.npmjs.com/package/remark-cli) – CLI to process markdown with remark
* [`remark`](https://github.com/remarkjs/remark) – markdown processor powered by plugins
* [`unified`](https://github.com/unifiedjs/unified) – interface for processing text with syntax trees

## License

[MIT](LICENSE) © [Pelle Wessman](https://kodfabrik.se/)
