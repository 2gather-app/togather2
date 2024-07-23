import en from './src/i18n/en.json'
import pl from './src/i18n/pl.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources: {
		en: {
			translation: en
		},
		pl: {
			translation: pl
		}
	},
	fallbackLng: 'en-US',
	interpolation: {
		escapeValue: false
	}
})

export default i18n
