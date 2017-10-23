import validateSchema from './validateSchema'

export default function(collection, modifier, keys) {
  const schema = collection.simpleSchema()
  return validateSchema(schema, modifier, keys)
}
