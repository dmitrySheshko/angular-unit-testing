module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "quotes": [2, "single"],
        "angular/controller-name": 2,
        "angular/controller-as": 2,
        "angular/on-watch": 2,
        "angular/empty-controller": 2,
        "semi": ["error", "always"],
        "no-empty-function": "error"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "globals": {
        "angular": 1
    },
    "plugins": ["angular"]
};