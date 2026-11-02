import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'whatwg-fetch'
import { SMS_OPTIN_URL } from '../../_app/constants'

// Votel form field ids
const FIELD_NAME = 'node_50372451'
const FIELD_PHONE = 'node_9cbcc8a9'
const FIELD_CONSENT = 'node_8fd64957'

// Votel expects E.164; assume US/Canada when no country code is given
function toE164(input) {
  const digits = input.replace(/\D/g, '')
  if (input.trim().startsWith('+')) return `+${digits}`
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  return null
}

function SmsOptinForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!consent) {
      toast.error('Please tick the checkbox to receive text messages')
      return
    }

    const e164 = toE164(phone)
    if (!e164) {
      toast.error('Please enter a valid mobile number, e.g. (555) 123-4567')
      return
    }

    setIsSubmitting(true)
    fetch(SMS_OPTIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        responses: {
          [FIELD_NAME]: name,
          [FIELD_PHONE]: e164,
          [FIELD_CONSENT]: consent,
        },
        is_final: true,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        toast.success('Thanks! You are signed up for text messages.')
        setName('')
        setPhone('')
        setConsent(false)
      })
      .catch(() => toast.error('Something went wrong. Please try again.'))
      .then(() => setIsSubmitting(false))
  }

  return (
    <form className="mt-2 t-left" onSubmit={handleSubmit} id="sms-optin-form">
      <p className="strong mb-0-5">Get updates by text message (optional)</p>
      <div className="flex flex-wrap justify-content-center">
        <input
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="Enter your first name"
          className="form-control form-control-lg b-blue m--25"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Enter your mobile number"
          className="form-control form-control-lg b-blue m--25"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <input
          type="submit"
          value="Text Me Updates"
          className="btn btn-lg btn-primary btn-block m--25"
          disabled={isSubmitting}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          id="sms-consent"
          name="sms_consent"
          className="form-check-input"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
        />
        <label htmlFor="sms-consent" className="form-check-label">
          <small>
            By providing your phone number, you agree to receive Marketing,
            Customer Care text messages from I LOVE CODING INC. Message
            frequency may vary. Message and data rates may apply. Reply STOP to
            opt out. Reply HELP for help.
            {' '}
            <Link to="/pages/privacy"><u>Privacy Policy</u></Link>
            {' · '}
            <Link to="/pages/terms"><u>Terms and Conditions</u></Link>
          </small>
        </label>
      </div>
    </form>
  )
}

export default SmsOptinForm
