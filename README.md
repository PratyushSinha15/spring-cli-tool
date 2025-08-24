# PxDev Spring CLI 🚀

A simple and efficient CLI tool to quickly generate a Spring Boot project structure with either Maven or Gradle. This tool saves you valuable time by scaffolding a ready-to-run Spring Boot application, so you can start coding your business logic right away.

---

## 📋 Table of Contents

- [📦 Installation](#-installation)
- [⚡ Usage](#-usage)
- [📝 Example](#-example)
- [📂 Project Structure](#-project-structure)
- [🏃 Running the Project](#-running-the-project)


---

## 📦 Installation

You can install the CLI globally using npm, which makes it accessible from anywhere in your terminal.

```
npm install -g pxdev-spring-cli
```
## ⚡ Usage

After the installation is complete, you can run the CLI using the following command:

```
px-spring
```
The tool will then launch an interactive setup guide, asking for the following details:

Project name: The name of your application directory.

Build tool: Your choice between Maven or Gradle.

Spring Boot version: The specific version of Spring Boot you want to use.

Dependencies: A comma-separated list of initial dependencies (e.g., Web, JPA, Lombok).

📝 Example
Here is an example of how to use the interactive prompt:

```
$ px-spring

? Enter project name: my-first-spring-app
? Select build tool: Maven
? Choose Spring Boot version: 3.2.5
? Add dependencies (comma separated): Web, JPA, MySQL
This will create a new Spring Boot project in a directory named my-first-spring-app.

📂 Project Structure
The CLI generates a standard Spring Boot project structure as shown below:

my-first-spring-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       └── DemoApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
├── .gitignore
├── pom.xml         (if Maven is selected)
└── build.gradle    (if Gradle is selected)
```
🏃 Running the Project
Once the project is generated, navigate into the project directory and run it using the appropriate command for your chosen build tool.

Change into the project directory:


```
cd my-first-spring-app
```

Run the application:

If you selected Maven:
```
./mvnw spring-boot:run
```

If you selected Gradle:

```
./gradlew bootRun
```

Your Spring Boot application will now be running and accessible at http://localhost:8080.
