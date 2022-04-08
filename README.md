# tdd_kata
TDD Kata is a assessment for the incubyte Oraganization.

# for testing run below command
npm test

# Docker
docker build . -t tdd-kata // for building docker image

docker images  // List of images you must see tdd-kata repository name like below
REPOSITORY   TAG         IMAGE ID       CREATED         SIZE
tdd-kata     latest      caa7c9b5408a   5 minutes ago   111MB

// For running as container
docker container run --name tdd-kata tdd-kata
