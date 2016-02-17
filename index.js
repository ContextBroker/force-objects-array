function addType(type)
{
  var item = this[type]
  item.type = type

  return item
}


function forceObjectsArray(array)
{
  // null / undefined
  if(array == null) return []

  // Array
  if(array instanceof Array) return array

  // Single object
  if(array.type) return [array]

  // Mapping / literal object
  if(array.constuctor.name === 'Object') return array.keys().map(addType, array)

  // Invalid object
  var error = new SyntaxError('Invalid object')
      error.data = array

  throw error
}


module.exports = forceObjectsArray
