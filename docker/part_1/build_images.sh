docker build -f ./images/Dockerfile.test -t rahnema:test ./images
docker build -f ./images/Dockerfile.prod -t rahnema:prod -t rahnema:latest ./images 

# docker push ...:test 
# docker push ...:prod 
# docker push ...:latest 