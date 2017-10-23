/* global Package */

Package.describe({
  name: 'orionsoft:apollo-helpers',
  version: '0.3.1',
  // Brief, one-line summary of the package.
  summary: 'Helpers for Apollo and Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/orionsoft/apollo-helpers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3')
  api.use('ecmascript')
  api.use('mdg:validation-error@0.5.1', 'server')
  api.mainModule('apollo-helpers.js', 'server')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('orionsoft:apollo-helpers')
  api.mainModule('apollo-helpers-tests.js')
})
