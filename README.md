Appcues.com
===========

This is the repository for [Appcues.com](http://appcues.com).

### Infrastructure

Appcues.com runs on [Jekyll](http://jekyllrb.com) and is currently hosted on Github Pages.

### Getting Dependencies

To get started, install [bundler](http://bundler.io), then run `bundle install`.

### Running Locally

Run the following command to activate the local server:

    jekyll serve --watch

That'll spin up a server at [localhost:4000](http://localhost:4000)

### Releasing Your Changes

Anything pushed to `master` will be automatically built and deployed using Wercker. **Do not** push to the `gh-pages` branch unless you're doing a hotfix, since it'll eventually get overridden by future changes to `master`.
