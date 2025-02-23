import path from "path";
import zipper from "zip-local";
import fs from "fs";
export default (destination = "./pageBuilderInstallation.zip") => {
    if (fs.existsSync(destination)) {
        return;
    }

    const dir = path.dirname(destination);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    return zipper.sync.zip(path.join(__dirname, "files")).compress().save(destination);
};
