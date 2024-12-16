// Require file system
import inquirer from "inquirer";
import fs from "fs";

// Path JSON config file
const configPath = "src/config/config.json";

// Get initial configuration
const loadConfig = () => {
  if (!fs.existsSync(configPath)) {
    console.error("Error: fail geting the config file");
  }
  const configData = fs.readFileSync(configPath, "utf-8");
  // Return the data in a JSON format
  return JSON.parse(configData);
};

// Save data into file
const saveConfig = (newConfig) => {
  fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2), "utf-8");
  console.log("Config save successfully...");
};

// Make a function that returns the questions
const questions = (currentConfig) => [
  {
    type: "input",
    name: "apiUrl",
    message: "Main url of the control room API:",
    default: currentConfig.apiUrl,
  },
  {
    type: "input",
    name: "pageTitle",
    message: "Page title:",
    default: currentConfig.pageTitle,
  },
  {
    type: "input",
    name: "logoCompany",
    message: "Path of the logo company:",
    default: currentConfig.logoCompany,
  },
  {
    type: "input",
    name: "companyName",
    message: "Company name:",
    default: currentConfig.companyName,
  },
];

// Get the user input
const main = async () => {
  try {
    console.log("loading initial configuration");
    const currentConfig = loadConfig();

    console.log("Type the new values to the config variables");
    const answers = await inquirer.prompt(questions(currentConfig));

    // Update the config with the values inputted
    const updatedConfig = {
      ...currentConfig,
      apiUrl: answers.apiUrl,
      pageTitle: answers.pageTitle,
      logoCompany: answers.logoCompany,
      companyName: answers.companyName,
    };
    // Save the final file
    saveConfig(updatedConfig);
  } catch (error) {
    console.error("Error updating the configuration file...", error);
  }
};

// Call the main function
main();
