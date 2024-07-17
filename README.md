## Running the app

1. In order to run the app properly you need to use LTS version of Node. It is advised to use [nvm](https://github.com/nvm-sh/nvm) tool to manage your node instances.
2. After that the only thing left to do is to run `yarn` in a root directory to fetch dependencies and then you can run `yarn start`.

## Committing your code

We should use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) but with some minor changes; Anything related to `build` or `ci` should be marked as `devops`. We should be using `feat`, `bug`, `chore`, `devops`, `test`, `docs`.

Example: `gt create 'docs/README-update' -m 'docs: README update'`\
Where the first argument becomes a branch name and the second one PR name.

### You don't have to add any reviewers, label etc. to your PR, it'll be added automatically.

TEST