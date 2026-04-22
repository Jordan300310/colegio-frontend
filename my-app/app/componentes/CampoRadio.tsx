'use client'

import React from 'react'
import { CampoFormularioField } from './CampoFormulario.types'

interface CampoRadioProps {
  field: CampoFormularioField
  value?: string
  onChange?: (name: string, value: string) => void
}

const CampoRadio: React.FC<CampoRadioProps> = ({ field, value = '', onChange }) => {
  const cols = field.cols ?? 2
  const columnClasses =
    cols === 1
      ? 'sm:grid-cols-1'
      : cols === 2
      ? 'sm:grid-cols-2'
      : cols === 3
      ? 'sm:grid-cols-3'
      : 'sm:grid-cols-2'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return
    onChange(field.name, event.target.value)
  }

  return (
    <div className="space-y-2">
      <span className="block text-xs text-background font-bold uppercase tracking-widest mb-2">
        {field.label}
      </span>
      <div className={`grid gap-3 ${columnClasses}`}>
        {field.options?.map((option) => (
          <label key={option} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={field.name}
              value={option}
              defaultChecked={onChange ? undefined : value === option}
              checked={onChange ? value === option : undefined}
              disabled={field.disabled}
              onChange={handleChange}
              className="w-4 h-4 accent-black border-2 border-black"
            />
            <span className="text-xs text-background font-bold uppercase">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CampoRadio
