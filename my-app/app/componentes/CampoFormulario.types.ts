export type CampoFormularioFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'select'
  | 'checkbox'
  | 'radio'

export interface CampoFormularioField {
  type: CampoFormularioFieldType
  name: string
  label: string
  placeholder?: string
  icon?: string
  options?: string[]
  cols?: number
  disabled?: boolean
}

export interface CampoFormularioProps {
  title?: string
  fields: CampoFormularioField[]
  values?: Record<string, string | boolean>
  onChange?: (name: string, value: string | boolean) => void
  className?: string
}
