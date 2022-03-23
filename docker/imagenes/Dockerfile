FROM openjdk

RUN apt-get update && apt-get upgrade -y

WORKDIR /the/workdir/path

COPY README.txt .
COPY *.jar app/

ENTRYPOINT ["java", "-jar", "app/my-application.jar"]