module.exports = {
    extends: [require.resolve('stylelint-prettier/recommended')],
    rules: {
        'arui-cssvars/use-variables': true,
        'block-no-empty': true,
        'color-hex-length': 'short',
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['stylelint-commands'],
            },
        ],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'first-nested'],
                ignore: ['after-comment', 'inside-single-line-block'],
            },
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 2,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': 'lower',
        'keyframe-declaration-no-important': true,
        'length-zero-no-unit': true,
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'no-empty-source': true,
        'no-invalid-double-slash-comments': true,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'single',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-no-newline': true,
        'unit-no-unknown': true,

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-quotes': 'always',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-parentheses-space-inside': 'never',
        'at-rule-semicolon-space-before': 'never',
        'stylelint-core-vars/use-vars': true,
        'stylelint-core-vars/use-mixins': true,
        'stylelint-core-vars/use-one-of-vars': [true, { severity: 'warning' }],
        'stylelint-core-vars/use-one-of-mixins': [true, { severity: 'warning' }],
        'stylelint-core-vars/do-not-use-dark-colors': [true, { severity: 'warning' }],
    },
    plugins: [
        require.resolve('@alfalab/stylelint-core-vars'),
        require.resolve('arui-cssvars/lint/stylelint'),
    ],
};
