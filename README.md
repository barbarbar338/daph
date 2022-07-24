# 🦄 Daph

-   A simple CLI commander system ✨

# 📥 Installation

Using yarn:

```
$ yarn add daph
```

Using npm:

```
$ npm install daph
```

# 🔧 Usage

```ts
daph
    .createCommand(ICommand, callback(commandName, args) => unknown) // create command
    .createCommand(ICommand, callback(commandName, args) => unknown) // create another command
    .help() // If none of the above commands are used, execute the help command.
```

-   `ICommand`: Where command is defined to be used when separating arguments. Structure:

```js
{
    name: "test", // Command name
    usage: "--message <your_message>", // Command usage
    example: [ "--message Hello, world!", "-m Test message" ], // Usage examples
    category: "test", // Command category
    aliases: [ "t" ], // Command aliases
    description: "just a test command", // Command description
    argDefinitions: [
        { name: "message", type: String, aliases: [ "m" ] }
    ] // Arg definition array (Learn about ArgDefinition below)
}
```

-   `ArgDefinition`: Where options are defined to be used when separating arguments. Structure:

```js
{
    name: "message", // Option name
    type: String // Option type (function)
    aliases?: [ "m" ], // Option aliases (optional)
    default?: false, // optional
    isOptional?: false // optional
}
```

-   `callback(commandName, args) => unknown`: If the command you set is used, the action to be applied. Example:

```js
daph.createCommand(ICommand, (commandName, args) => { //         callback(commandName, args) ⬇️
    console.log("You used", commandName, "command with arguments", args);
});
```

# 🛠️ Example

```js
import daph from "daph";

daph
    .createCommand({
        name: "install",
        usage: "<module_name> [--version] <package_version>",
        example: [ "daph", "bargs --version 1.0.1" ],
        category: "utility",
        aliases: [ "i", "add" ],
        description: "Install packages from server",
        argDefinitions: [
            { name: "module", type: String, default: true },
            { name: "version", type: String, isOptional: true }
        ]
    }, (commandName, args) => {
        const { module, version } = args;
        console.log("You have downloaded package", module, "with version" version ? version : "latest");
    })
    .help()
```

# 🔗 Contributing / Issues / Ideas

Feel free to use GitHub's features ✨
