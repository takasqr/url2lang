function url2lang(url: String) {
  if (url.indexOf('/en/') != -1) {
    return 'en'
  } else if (url.indexOf('/ja/') != -1) {
    return 'ja'
  } else if (url.indexOf('/it/') != -1) {
    return 'it'
  } else if (url.indexOf('/ko/') != -1) {
    return 'ko'
  } else if (url.indexOf('/fr/') != -1) {
    return 'fr'
  } else if (url.indexOf('/id/') != -1) {
    return 'id'
  } else if (url.indexOf('/zh-cn/') != -1) {
    return 'zh-cn'
  } else if (url.indexOf('/zh-tw/') != -1) {
    return 'zh-tw'
  } else if (url.indexOf('/es/') != -1) {
    return 'es'
  } else if (url.indexOf('/ar/') != -1) {
    return 'ar'
  } else if (url.indexOf('/pt/') != -1) {
    return 'pt'
  } else if (url.indexOf('/de/') != -1) {
    return 'de'
  } else if (url.indexOf('/ru/') != -1) {
    return 'ru'
  } else if (url.indexOf('/pl/') != -1) {
    return 'pl'
  } else if (url.indexOf('/uk/') != -1) {
    return 'uk'
  } else if (url.indexOf('/el/') != -1) {
    return 'el'
  } else if (url.indexOf('/tr/') != -1) {
    return 'tr'
  } else if (url.indexOf('/lv/') != -1) {
    return 'lv'
  } else if (url.indexOf('/th/') != -1) {
    return 'th'
  } else if (url.indexOf('/bn/') != -1) {
    return 'bn'
  } else {
    return 'unknown'
  }
}
export default url2lang