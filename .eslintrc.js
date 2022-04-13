module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true, //启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "settings": {
        "import/resolver": {
          "node": {
            "moduleDirectory": ["node_modules", "src"],
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          },
          "typescript": {
            // 从 <roo/>@types 读取类型定义
            "alwaysTryTypes": true,
          },
        },
        "import/parsers": {
            // 使用 TypeScript parser
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "typescript": {
            "directory": "./path/to/folder"
        },
        
      },
}
