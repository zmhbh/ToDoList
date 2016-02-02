## ToDoList Application

### Build and run

#### Prerequisites

- Java 7
- Maven 3

#### Configurations for MySQL

Open the `/ToDoList-Backend/src/main/resources/application.properties` file and set your own configurations for MySQL. The default one is for my local usage.

#### Run Backend from terminal

Go to the backend root folder `./ToDoList-Backend/`, then type:

    $ mvn spring-boot:run

#### Run Frontend

To avoid *Cross Domain* problem, please quit your Chrome and run Chrome again from your terminal as followed.

	open /Applications/Google\ Chrome.app --args --disable-web-security

It will temporarily solve this problem.

Go to the frontend root folder `./ToDoList-Frontend/` and drag `index.html` to your chrome, you will see this demo.

