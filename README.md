<<<<<<< HEAD
# Apollo Helpers

Helpers for Meteor and Apollo (serverside)
=======
# Apollo Helpers


## Installation

    yarn add object-path
    meteor add orionsoft:apollo-helpers

## Usage

```javascript
import {Meteor} from 'meteor/meteor'
import {createModifier, validate} from 'meteor/orionsoft:apollo-helpers'

export default function (root, {userId, profile}, context) {
  const keys = {
    'profile.name': 'name',
    'profile.phone': 'phone',
    'profile.address': 'address',
    'profile.district': 'district',
    'profile.city': 'city',
    'profile.state': 'state',
    'profile.country': 'country'
  }
  // transform your input data to make it easier to insert into update function 
  const modifier = createModifier(profile, keys)
  // Validate your formatted input data with your scheme rules, if you have any error return a friendly object with your error
  validate(Meteor.users, modifier, keys)
  Meteor.users.update(userId, modifier)
  return Meteor.users.findOne(userId)
}
```
## Methods
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
>>>>>>> 84c2d835ddcee67413bdc4cb4bdfcc9187ddc025
