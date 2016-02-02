## Using MySQL in Spring Boot via Spring Data JPA and Hibernate

See here for more informations:
http://blog.netgloo.com/2014/10/27/using-mysql-in-spring-boot-via-spring-data-jpa-and-hibernate/

### Usage

- Run the application and go on http://localhost:8080/
- Use the following urls to invoke controllers methods and see the interactions
  with the database:
    * `/create?email=[email]&name=[name]`: create a new user with an 
      auto-generated id and email and name as passed values.
    * `/delete?id=[id]`: delete the user with the passed id.
    * `/get-by-email?email=[email]`: retrieve the id for the user with the 
      passed email address.
    * `/update?id=[id]&email=[email]&name=[name]`: update the email and the 
      name for the user indentified by the passed id.

### Build and run

#### Configurations for MySQL

Open the `/ToDoList-Backend/src/main/resources/application.properties` file and set your own configurations.

#### Prerequisites

- Java 7
- Maven 3

#### Run Backend from terminal

Go to the backend root folder `./ToDoList-Backend/`, then type:

    $ mvn spring-boot:run

#### Run Frontend

To avoid *Cross Domain* problem, please quit your Chrome and run Chrome again from your terminal as followed.

	open /Applications/Google\ Chrome.app --args --disable-web-security

It will temporarily solve this problem.

Go to the frontend root folder `./ToDoList-Frontend/` and drag `index.html` to your chrome, you will see this demo.

