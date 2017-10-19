import {ValidationError} from 'meteor/mdg:validation-error'
import has from 'lodash/has'
import zipObject from 'lodash/zipObject'
import getKeys from 'lodash/keys'

export default function(schema, modifier, keys = {}) {
  const input = {...modifier.$set, ...modifier.$unset}
  keys = keys || zipObject(getKeys(input), getKeys(input))
  const cleaned = schema.clean(modifier)
  const validationContext = schema.newContext()
  const options = {modifier: has(modifier, '$set') || has(modifier, '$unset')}
  const isValid = validationContext.validate(cleaned, options)

  if (isValid) return

  const errors = validationContext._validationErrors.map(function(error) {
    return {
      name: keys[error.name] || error.name,
      type: error.type,
      message: validationContext.keyErrorMessage(error.name),
      details: {
        value: error.value
      }
    }
  })

  // In order for the message at the top of the stack trace to be useful,
  // we set it to the first validation error message.
  const message = errors[0] ? validationContext.keyErrorMessage(errors[0].name) : 'Unknown error'

  throw new ValidationError(errors, message)
}
