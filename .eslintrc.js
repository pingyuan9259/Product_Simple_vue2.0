/* eslint-disable */

module.exports = {
    // eslint默认会从所有父级目录一直到根目录中寻找配置文件，此项为true表示不在父级目录中寻找配置文件
    'root': true,

    // 使babel解析的代码与eslint兼容
    'parser': 'babel-eslint',

    'parserOptions': {
        // 设置代码为ECMAScript的模块，默认为'script'
        'sourceType': 'module'
    },

    // 定义使用环境
    'env': {
        'es6': true, // 不指定该项会导致检查某些环境变量报错，如'Promise' is not defined
        'browser': true, // 不指定该项会找不到BOM环境变量
        'node': true, // 不指定该项会找不到Node环境变量
    },

    // 套装配置
    'extends': [
        'eslint:recommended', // 使用eslint的推荐套装
        'plugin:promise/recommended', // 使用插件eslint-plugin-promise的推荐套装
    ],

    'plugins': [
        'html', // 来检查存在于.html和.vue中的代码
        'promise',
    ],

    // 检查模块是否被实际检索到
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },

    // 自定义规则
    // 0: off | 1: warn | 2: error
    'rules': {
        
        // 只在开发环境开启调试log
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        /*
         * 可能出现的错误 ↓
         */

        // 不允许使用非必要的括号 | http://eslint.cn/docs/rules/no-extra-parens
        'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],

        // 禁止在运算符左侧执行关系运算 | https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // 强制验证jsdoc规则 | http://eslint.cn/docs/rules/valid-jsdoc
        'valid-jsdoc': 'off',

        /*
         * 最佳实践 ↓
         */

        // 要求数组方法的回调函数中有 return 语句 | http://eslint.cn/docs/rules/array-callback-return
        'array-callback-return': 'error',

        // 要求遵循大括号约定 | http://eslint.cn/docs/rules/curly
        'curly': ['error', 'multi-line'],

        // 访问属性的点号要放到属性前面 | http://eslint.cn/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // 要求尽量使用点号而不是中括号来访问属性 | http://eslint.cn/docs/rules/dot-notation
        'dot-notation': 'warn',

        // 要求使用 === 和 !== | http://eslint.cn/docs/rules/eqeqeq
        'eqeqeq': ['error', 'smart'],

        // 禁用 caller 或 callee (废弃方法) | http://eslint.cn/docs/rules/no-caller
        'no-caller': 'error',

        // 禁止出现空函数 | http://eslint.cn/docs/rules/no-empty-function
        'no-empty-function': 'error',

        // 禁止不必要的函数绑定 | http://eslint.cn/docs/rules/no-extra-bind
        'no-extra-bind': 'error',

        // 禁用不必要的标签 | http://eslint.cn/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // 禁止数字字面量中使用前导和末尾小数点 | http://eslint.cn/docs/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // 禁止给只读全局变量赋值 | http://eslint.cn/docs/rules/no-global-assign
        'no-global-assign': 'error',

        // 禁用隐式的eval() | http://eslint.cn/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // 禁用迭代器(废弃属性) | http://eslint.cn/docs/rules/no-iterator
        'no-iterator': 'error',

        // 禁用不必要的嵌套块{} | http://eslint.cn/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // 禁止出现多个空格 | http://eslint.cn/docs/rules/no-multi-spaces
        'no-multi-spaces': 'error',

        // 禁止原始包装实例 | http://eslint.cn/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // 禁止在字符串中使用八进制转义序列(废弃) | http://eslint.cn/docs/rules/no-octal-escape
        'no-octal-escape': 'error',

        // 禁止自身比较 | http://eslint.cn/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // 禁止抛出异常字面量 | http://eslint.cn/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // 禁止未使用过的变量(推荐配置，但觉得要排除掉参数) | http://eslint.cn/docs/rules/no-unused-vars
        'no-unused-vars': ['error', { "args": "none" }],

        // 禁止出现未使用过的表达式 | http://eslint.cn/docs/rules/no-unused-expressions
        'no-unused-expressions': 'error',

        // 禁止不必要的 .call() 和 .apply() | http://eslint.cn/docs/rules/no-useless-call
        'no-useless-call': 'error',

        // 禁止不必要的字符串字面量或模板字面量的连接 | http://eslint.cn/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // 禁用不必要的转义字符 | http://eslint.cn/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // 禁用 void 操作符 | http://eslint.cn/docs/rules/no-void
        'no-void': 'error',

        // 要求 IIFE 使用括号括起来 | http://eslint.cn/docs/rules/wrap-iife
        'wrap-iife': 'error',

        // 要求或禁止 “Yoda” 条件 | http://eslint.cn/docs/rules/yoda
        'yoda': 'error',

        /*
         * 变量
         */

        // 不允许标签与变量同名 | http://eslint.cn/docs/rules/no-label-var
        'no-label-var': 'error',

        // 不允许初始化变量值为 undefined | http://eslint.cn/docs/rules/no-undef-init
        'no-undef-init': 'error',

        // 禁止定义前使用 | http://eslint.cn/docs/rules/no-use-before-define
        'no-use-before-define': 'error',

        /*
         * Node.js and CommonJS
         */

        // 禁止调用 require 时使用 new 操作符 | http://eslint.cn/docs/rules/no-new-require
        'no-new-require': 'error',

        /*
         * 主观风格规则
         */

        // 强制数组方括号中使用一致的空格 | http://eslint.cn/docs/rules/array-bracket-spacing
        'array-bracket-spacing': 'error',

        // 强制在单行代码块中使用一致的空格 | http://eslint.cn/docs/rules/block-spacing
        'block-spacing': 'error',

        // 强制在代码块中使用一致的大括号风格 | http://eslint.cn/docs/rules/brace-style
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],

        // 要求或禁止末尾逗号 | http://eslint.cn/docs/rules/comma-dangle
        'comma-dangle': ['error', 'always-multiline'],

        // 强制在逗号周围使用空格 | http://eslint.cn/docs/rules/comma-spacing
        'comma-spacing': 'error',

        // 强制使用一致的逗号风格 | http://eslint.cn/docs/rules/comma-style
        'comma-style': 'error',

        // 强制在计算的属性的方括号中使用一致的空格 | http://eslint.cn/docs/rules/computed-property-spacing
        'computed-property-spacing': 'error',

        // 要求或禁止文件末尾保留一行空行 | 'ttp://eslint.cn/docs/rules/eol-last
        'eol-last': ['error', 'always'],

        // 强制函数名与调用标志之间的空格 | http://eslint.cn/docs/rules/func-call-spacing
        'func-call-spacing': 'error',

        // 强制使用一致的缩进 | http://eslint.cn/docs/rules/indent
        'indent': ['error', 2, { 'SwitchCase': 1 }],

        // 强制在 JSX 属性中使用一致的单引号或双引号 | http://eslint.cn/docs/rules/jsx-quotes
        'jsx-quotes': 'error',

        // 强制在对象字面量的属性中键和值之间使用一致的间距 | http://eslint.cn/docs/rules/key-spacing
        'key-spacing': 'error',

        // 强制在关键字前后使用一致的空格 | http://eslint.cn/docs/rules/keyword-spacing
        'keyword-spacing': 'error',

        // 代码逻辑空格(待配置) | http://eslint.cn/docs/rules/padding-line-between-statements
        'lines-around-directive': 'off',

        // 要求构造函数首字母大写 | http://eslint.cn/docs/rules/new-cap
        'new-cap': 'off',

        // 要求调用无参构造函数时有圆括号 | http://eslint.cn/docs/rules/new-parens
        'new-parens': 'error',

        // 禁用 Array 构造函数 | http://eslint.cn/docs/rules/no-array-constructor
        'no-array-constructor': 'error',

        // 禁用 Object 的构造函数 | http://eslint.cn/docs/rules/no-new-object
        'no-new-object': 'error',

        // 禁用行尾空格 | http://eslint.cn/docs/rules/no-trailing-spaces
        'no-trailing-spaces': 'error',

        // 禁止可以在有更简单的可替代的表达式时使用三元操作符 | http://eslint.cn/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 'error',

        // 禁止属性前有空白 | http://eslint.cn/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // 强制在大括号中使用一致的空格 | http://eslint.cn/docs/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'always'],

        // 要求或禁止块内填充 | http://eslint.cn/docs/rules/padded-blocks
        'padded-blocks': ['error', 'never'],

        // 要求对象字面量属性名称用引号括起来 | http://eslint.cn/docs/rules/quote-props
        'quote-props': ['error', 'as-needed'],

        // 强制使用一致的反勾号、双引号或单引号 | http://eslint.cn/docs/rules/quotes
        'quotes': ['error', 'single'],

        // 强制分号之前和之后使用一致的空格 | http://eslint.cn/docs/rules/semi-spacing
        'semi-spacing': 'error',

        // 使用分号结尾 | http://eslint.cn/docs/rules/semi
        'semi': ['error', 'always'],

        // 强制在块之前使用一致的空格 | http://eslint.cn/docs/rules/space-before-blocks
        'space-before-blocks': 'error',

        // 最佳实践要求no-console, 所以我们还是打开吧 | http://eslint.cn/docs/rules/no-console
        'no-console': 'off',

        // 强制在function的左括号之前使用一致的空格 | http://eslint.cn/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],

        // 强制在圆括号内使用一致的空格 | http://eslint.cn/docs/rules/space-in-parens
        'space-in-parens': ['error', 'never'],

        // 要求操作符周围有空格 | http://eslint.cn/docs/rules/space-infix-ops
        'space-infix-ops': 'error',

        // 强制在一元操作符前后使用一致的空格 | http://eslint.cn/docs/rules/space-unary-ops
        'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],

        // 强制在注释中 // 或 /* 使用一致的空格 | http://eslint.cn/docs/rules/spaced-comment
        'spaced-comment': 'error',

        /*
         * ECMAScript 6
         */

        // 箭头函数体使用大括号 | http://eslint.cn/docs/rules/arrow-body-style
        'arrow-body-style': 'off',

        // 箭头函数参数使用圆括号 | http://eslint.cn/docs/rules/arrow-parens
        'arrow-parens': 'off',

        // 强制箭头函数的箭头前后使用一致的空格 | http://eslint.cn/docs/rules/arrow-spacing
        'arrow-spacing': 'error',

        // 强制 generator 函数中 * 号周围使用一致的空格 | http://eslint.cn/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', 'after'],

        // 禁止重复导入模块 | http://eslint.cn/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 'error',

        // 在属性key中禁用没必要的计算 | http://eslint.cn/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // 禁用不必要的构造函数 | http://eslint.cn/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // 禁止给导入, 导出, 解构出来的变量重命名 | http://eslint.cn/docs/rules/no-useless-rename
        'no-useless-rename': 'error',

        // 要求使用 let 或 const 而不是 var | http://eslint.cn/docs/rules/no-var
        'no-var': 'error',

        // 要求或禁止对象字面量中方法和属性使用简写语法 | http://eslint.cn/docs/rules/object-shorthand
        'object-shorthand': 'off',

        // 要求使用箭头函数作为回调 | http://eslint.cn/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'off',

        // 要求使用 const 声明那些声明后不再被修改的变量 | http://eslint.cn/docs/rules/prefer-const
        'prefer-const': 'off',

        // 使用扩展运算符代替arguments | http://eslint.cn/docs/rules/prefer-rest-params
        'prefer-rest-params': 'off',

        // 要求使用扩展运算符调用可变参数函数而非 .apply() | http://eslint.cn/docs/rules/prefer-spread
        'prefer-spread': 'error',

        // 要求或禁止模板字符串中的嵌入表达式周围空格的使用 | http://eslint.cn/docs/rules/template-curly-spacing
        'template-curly-spacing': ['error', 'always'],

        // 强制在 yield* 表达式中 * 周围使用空格 | http://eslint.cn/docs/rules/yield-star-spacing
        'yield-star-spacing': 'error'
    }
}
