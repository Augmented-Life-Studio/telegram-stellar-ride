import { TextFieldProps } from '@mui/material/TextField'

export interface CommonInputProps {
  labelSideText?: string | React.ReactNode
  labelBold?: boolean
  placeholderLabel?: string
  placeholder?: string
  topDescription?: string
  bottomDescription?: string | React.ReactNode
  required?: boolean
  value?: string | number
  errorMsg?: string
  textarea?: boolean
  maxLength?: number
  success?: boolean
  successMsg?: string
  startIcon?: React.ReactNode
  padding?: string
  endSideIcon?: React.ReactNode
  restrictedValue?: any
  testId?: string
}

export type ConditionalInputProps =
  | {
      endIcon?: React.ReactNode
      inboxTitle?: never
    }
  | {
      endIcon?: never
      inboxTitle?: string
    }

export type InputProps = CommonInputProps & ConditionalInputProps & TextFieldProps
