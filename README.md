# Apollo Helpers


##Installation

    yarn add object-path
    meteor add orionsoft:apollo-helpers

##Usage

```javascript
import {validate, createModifier} from 'meteor/orionsoft:apollo-helpers'
import Posts from 'api/collections/Posts'

export default function (root, {postId, postInput},context) { 
  // transform your input data to make it easier to insert into update function 
  const modifier = createModifier(postInput)
  // Validate your formatted input data with your scheme rules, if you have any error return a friendly object with your error
  validate(Posts, modifier)
  Posts.update(postId, modifier)
  return Posts.findOne(postId)
}
```
##Methods
**createModifier**

Creates a ready to use object in the function to update the collection

```javascript
import {createModifier} from 'meteor/orionsoft:apollo-helpers'

const modifier = createModifier(inputData)
```
- ```inputData``` : Input Data from the mutation 


**validate**

Validate your modifier with your scheme rules

```javascript
import {validate} from 'meteor/orionsoft:apollo-helpers'

validate(Collection, modifier)
```
- ```Collection``` : Mongo Collection
- ```modifier``` : Result of the createModifier function
