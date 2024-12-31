import { createI18n } from 'vue-i18n'

const messages = {}

function saveCookie(name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
}

function getCookie(name) {
  const nameEQ = name + '='
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1)
    if (cookie.indexOf(nameEQ) === 0) return decodeURIComponent(cookie.substring(nameEQ.length))
  }
  return null
}

async function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.json')
  for (const [key, value] of Object.entries(locales)) {
    const locale = key.match(/\/(\w+)\.json$/)[1]
    messages[locale] = await value()
  }

  let language = getCookie('i18n_lang')

  if (!language) {
    language = 'en'
    saveCookie('i18n_lang', language, 365)
  }
}

async function initializeI18n() {
  await loadLocaleMessages()
  let language = getCookie('i18n_lang') || 'en' // Default to 'en' if no cookie exists
  saveCookie('i18n_lang', language, 365)

  return createI18n({
    legacy: false,
    locale: language,
    fallbackLocale: 'en',
    messages,
  })
}

export { initializeI18n, saveCookie, getCookie }
