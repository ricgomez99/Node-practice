const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const directory = process.argv[2] ?? "."; // ->?? nullish coalescing operator

async function ls(directory) {
  let files;
  try {
    files = await fs.readdir(directory);
  } catch (error) {
    console.log(pc.red(`Unable to read the dir: ${directory}`));
    process.exit(1);
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(directory, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
      console.log(stats);
    } catch (error) {
      console.log(pc.red(`Unable to find the file path: ${filePath}`));
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModification = stats.mtime.toLocaleDateString();

    return `file: ${pc.blue(file.padEnd(20))}, size: ${fileSize.padStart(
      10
    )}, type: ${pc.green(fileType)}, modificated: ${fileModification}`;
  });

  const filesInfo = await Promise.all(filePromises);

  filesInfo.forEach((info) => console.log(info));
}

ls(directory);
