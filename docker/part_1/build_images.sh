rahnema=registry.hamdocker.ir/mohamadzangooei/rahnema

docker build -f ./images/Dockerfile.test -t $rahnema:test ./images
docker build -f ./images/Dockerfile.prod -t $rahnema:prod -t $rahnema:latest ./images 

docker push $rahnema:test 
docker push $rahnema:prod 
docker push $rahnema:latest 