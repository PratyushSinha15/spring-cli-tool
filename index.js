#!/usr/bin/env node
console.log("Hello from pxdev CLI!");
import inquirer from "inquirer";
import axios from "axios";
import fs from "fs-extra";

async function createSpringBootProject() {
  try {
    // Step 1: Input from user
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "groupId",
        message: "Enter Group Id:",
        default: "com.example",
      },
      {
        type: "input",
        name: "artifactId",
        message: "Enter Artifact Id:",
        default: "demo",
      },
      {
        type: "list",
        name: "language",
        message: "Choose Language:",
        choices: ["java", "kotlin", "groovy"],
        default: "java",
      },
      {
        type: "list",
        name: "type",
        message: "Build System:",
        choices: ["gradle-project", "gradle-kotlin"],
        default: "gradle-project",
      },
      {
        type: "list",
        name: "javaVersion",
        message: "Select Java Version:",
        choices: ["8", "11", "17", "21"],
        default: "21",
      },
      {
        type: "checkbox",
        name: "dependencies",
        message: "Select dependencies:",
        choices: ["web", "data-jpa", "mysql", "security", "lombok"],
      },
    ]);

    // Step 2: Build URL for Spring Initializr
    const baseUrl = "https://start.spring.io/starter.zip";
    const url = `${baseUrl}?type=${answers.type}&language=${answers.language}&groupId=${answers.groupId}&artifactId=${answers.artifactId}&javaVersion=${answers.javaVersion}&dependencies=${answers.dependencies.join(",")}`;

    console.log("📦 Downloading Spring Boot project from:", url);

    // Step 3: Download ZIP file
    const response = await axios.get(url, { responseType: "arraybuffer" });

    // Step 4: Save ZIP file
    const zipPath = `${answers.artifactId}.zip`;
    await fs.writeFile(zipPath, response.data);

    console.log(`✅ Project downloaded successfully: ${zipPath}`);
    console.log("➡️ Unzip karke tu project use kar sakta hai.");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

createSpringBootProject();
