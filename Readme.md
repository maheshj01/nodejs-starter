### NodeJS starter

This is a simple NodeJS starter project. It uses ExpressJS with TypeScript support. Clone or Use this template to start your new NodeJS project and save time setting up the project.


Alternatively, You can also create this project using a bash script. Check the [create-service.sh](https://gist.github.com/maheshj01/ae333fb4ce64ecd219b5b555e57edfbc) file.

Save this file locally and run the following command to create a new project.

```bash
bash create-service.sh <project-name>
```

### Folder Structure

```
- root/
    - src/
        - controllers/
            - requestController.ts
        - database/
            - dbConfig.ts
        - routes/
            - requestRoutes.ts
        - models/
        - middleware/
        - services/
            - requestService.ts
        - utils/
            - threadWorker
        - server.ts
    - .env
    - .gitignore
    - package.json
    - tsconfig.json
    - README.md
```

After creating the project add the following scripts to the package.json file.

```json
 "start": "npm run build && node dist/server.js",
    "dev": "npm run watch && nodemon dist/server.js",
    "build": "tsc",
    "serve": "node dist/server.js",
    "watch": "tsc -w",
    "test": "jest",
    "test:watch": "jest --watch"
```