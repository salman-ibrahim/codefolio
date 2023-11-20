# Contributing Guide

- Contributing to codefolio is fairly easy. This document shows you how to get started

## Submitting changes

- Fork the repo
  - <https://github.com/salman-ibrahim/codefolio>
- Check out a new branch based and name it to what you intend to do:
  - Example:
    ````
    $ git checkout -b BRANCH_NAME
    ````
    If you get an error, you may need to fetch branch first by using
    ````
    $ git remote update && git fetch
    ````
  - Use one branch per fix / feature
- Commit your changes
  - Please provide a git message that explains what you've done
  - Please make sure your commits follow the [conventions](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53#file-commit-message-guidelines-md)
  - Commit to the forked repository
  - Example:
    ````
    $ git commit -am 'describe your changes'
    ````
- Push to the branch
  - Example:
    ````
    $ git push origin BRANCH_NAME
    ````
- Make a pull request
  - Make sure you send the PR to the <code>main</code> branch
  - Make sure to <code>npm run lint</code> before making PR
  - Make sure the build checks have passed after generating PR
  - If build checks fail, see what went wrong in workflow.

If you follow these instructions, your PR will land pretty safely in the main repo!