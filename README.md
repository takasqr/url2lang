# url2lang

url2lang returns the language code from the language information contained in the url.

url2lang は url に含まれている言語情報から 言語コードを返します。

## Usage

```js
import url2lang from 'url2lang'

const lang = url2lang(window.location.pathname)

console.log(lang)
// en
```
