import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'


export const initialLocale = 'pt-BR'

interface ApplicationState {
    locale?: string   
}
export const store = proxy<ApplicationState>({
    locale: initialLocale,
  
})
const unsub = devtools(store, 'simpleHookForm')

