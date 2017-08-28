import {ValidationError} from 'meteor/mdg:validation-error'

export default function(field, message) {
  const errors = [
    {
      name: field,
      type: 'ValidationError',
      message,
      details: {
        value: message
      }
    }
  ]

  throw new ValidationError(errors, message)
}
