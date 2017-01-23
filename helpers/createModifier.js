import objectPath from 'object-path'
import getKeys from 'lodash/keys'
import zipObject from 'lodash/zipObject'

const updateSingle = function ({modifier, schemaKey, input, valueKey}) {
  if (!objectPath.has(input, valueKey)) return
  const value = objectPath.get(input, valueKey)
  if (value === null) {
    modifier.$unset = modifier.$unset || {}
    modifier.$unset[schemaKey] = ''
  } else {
    modifier.$set = modifier.$set || {}
    modifier.$set[schemaKey] = value
  }
}

export default function (input, keys) {
  keys = keys || zipObject(getKeys(input), getKeys(input))
  const modifier = {}

  getKeys(keys).map(schemaKey => {
    const valueKey = keys[schemaKey]
    updateSingle({modifier, schemaKey, input, valueKey})
  })

  return modifier
}
