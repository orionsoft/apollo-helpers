import validateSchema from './validateSchema'

export default function(collection, modifier, keys) {
  const input = {...modifier.$set, ...modifier.$unset}
  const schema = collection.simpleSchema()
  return validateSchema(schema, input, keys)
}
