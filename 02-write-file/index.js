const fs = require("fs");
const path = require("path");
const readline = require("readline");
const stream = fs.createWriteStream(path.join(__dirname, "text.txt"));

const line = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

line.write("hello there :)\n");
line.on("text", (data) =>
{
    if (data === "exit") {
        line.close()
    } else {
        stream.write(`${data}`)
    } 
});

process.on("exit", () =>
{
    line.write("See you, mate!");
    process.exit()
});