const getDetails = function (error) {
  if (!error.originalError) return
  if (!error.originalError.invalidKeys && error.originalError.error !== 'validation-error') return

  const invalidKeys = {}

  const keys = error.originalError.invalidKeys || error.originalError.details

  for (const key of keys) {
    const context = error.originalError.validationContext
    const message = context ? context.keyErrorMessage(key.name) : key.message
    invalidKeys[key.name] = message
  }

  return {invalidKeys}
}

export default function (error) {

  const response = {
    message: error.message,
    reason: error.reason,
    path: error.path
  }

  try {
    response.details = getDetails(error)
  } catch (e) {
    console.log('Error in formatError:')
    console.log(e)
    console.log(e.stack)
  }

  return response
}
