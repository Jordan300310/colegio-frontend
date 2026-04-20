import React from 'react'
import Etiquetas, { EtiquetaVariant } from './Etiquetas'

export interface TarjetaModuloProps {
  status?: string
  statusVariant?: EtiquetaVariant
  title: string
  description: string
  buttonLabel?: string
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const TarjetaModulo: React.FC<TarjetaModuloProps> = ({
  status,
  statusVariant = 'neutral',
  title,
  description,
  buttonLabel = 'Continuar',
  onButtonClick,
  className = '',
}) => {
  return (
    <article className={`bg-white border-2 border-black p-5 relative ${className}`.trim()}>
      {status ? (
        <div className="absolute top-[-12px] right-[-12px] p-3">
          <Etiquetas variant={statusVariant}>{status}</Etiquetas>
        </div>
      ) : null}
      <h3 className="font-bold text-lg uppercase mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        onClick={onButtonClick}
        className="w-full py-2 border-2 border-black text-sm font-bold uppercase hover:bg-gray-100"
      >
        {buttonLabel}
      </button>
    </article>
  )
}

export default TarjetaModulo
