/**
 * @import {} from 'remark-stringify'
 * @import {Preset} from 'unified'
 */

// import remarkGithub from 'remark-github'
// import remarkLintBlockquoteIndentation from 'remark-lint-blockquote-indentation'
// import remarkLintCheckboxCharacterStyle from 'remark-lint-checkbox-character-style'
// import remarkLintCheckboxContentIndent from 'remark-lint-checkbox-content-indent'
// import remarkLintCodeBlockStyle from 'remark-lint-code-block-style'
// import remarkLintDefinitionCase from 'remark-lint-definition-case'
// import remarkLintDefinitionSort from 'remark-lint-definition-sort'
// import remarkLintDefinitionSpacing from 'remark-lint-definition-spacing'
// import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker'
// import remarkLintFencedCodeFlag, {
//   checkGithubLinguistFlag
// } from 'remark-lint-fenced-code-flag'
// import remarkLintFencedCodeMarker from 'remark-lint-fenced-code-marker'
import remarkFrontmatter from 'remark-frontmatter';
// import remarkCommentConfig from 'remark-comment-config'
import remarkGfm from 'remark-gfm';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
// import remarkToc from 'remark-toc'
import remarkValidateLinks from 'remark-validate-links';

/** @type {Preset} */
const voxpelliRemarkPreset = {
  settings: {
    bullet: '*',
    emphasis: '_',
    strong: '*',
    rule: '-',
    fence: '`',
    fences: true,
    listItemIndent: 'one',
  },
  plugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkValidateLinks,
    [remarkLintUnorderedListMarkerStyle, '-'],
    // [
    //   remarkToc,
    //   {
    //     heading: 'contents|table[ -]of[ -]contents?|toc',
    //     maxDepth: 3,
    //     tight: true
    //   }
    // ],
    remarkGfm,
    // remarkGithub
  ],
};

export default voxpelliRemarkPreset;
