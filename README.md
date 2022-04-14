# tdd_kata
TDD Kata is a assessment for the incubyte Oraganization.

# for testing run below command
npm test

# Docker
### Build docker image
docker build . -t tdd-kata

### List of images you must see tdd-kata repository name like below
docker images

| REPOSITORY  | TAG         | IMAGE_ID     | CREATED      | SIZE        |
| ----------- | ----------- | -----------  | -----------  | ----------- |
| tdd-kata    | latest      | caa7c9b5408a | 1 minute age | 144mb       |

### For running as container
docker container run --name tdd-kata tdd-kata
