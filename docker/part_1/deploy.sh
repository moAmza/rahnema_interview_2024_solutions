docker build -t rahnema:test ./version_test
docker build -t rahnema:prod -t rahnema:latest ./version_prod 

# docker push ...:test 
# docker push ...:prod 
# docker push ...:latest 