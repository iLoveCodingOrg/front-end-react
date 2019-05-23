import React, { useRef } from 'react'
import Recaptcha from 'react-recaptcha'

export function Recaptcha2({ verifyTokenCb, onLoadCb }) {
  const el = useRef(null)

  const onLoad = () => {
    if (el && el.current) {
      onLoadCb(el.current)
    }
  }

  const onVerify = (recaptchaToken) => {
    verifyTokenCb(recaptchaToken)
  }

  return (
    <div className="mb-3">
      <Recaptcha
        sitekey="6Ld6SaEUAAAAACia7EGSf_4zcjigJVYj9X4UYoX-"
        ref={el}
        size="normal"
        render="explicit"
        onloadCallback={onLoad}
        verifyCallback={onVerify}
      />
    </div>
  )
}
