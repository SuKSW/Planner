## Backend

### How to Run (During Development)

1. Start the MongoDB service
    ```
    sudo mongod
    ```

2. In another terminal open the MongoDB shell and create a database in the name planner

    ```
    mongo
    use planner
    ```

3. Run the dev server
    ```
    cd <location of the backend dir>
    npm run dev
    ```

### Editing the Swagger YAML or Trying out API Requests
1. Run the Swagger Editor
    ```
    docker pull swaggerapi/swagger-editor
    docker run -d -p 80:8080 swaggerapi/swagger-editor
    ```
2. Navigate to http://localhost in your browser.
3. Import the `swagger.yaml` file in this folder to the swagger editor.
4. Make the necessary changes. Try out API requests.
5. `Save as YAML` to the same location where the yaml was.
6. To stop the Swagger Editor
```
docker ps -a
```
This lists all the containers.
```
docker stop <container id>
```
This stops the container.
7. Next time use the following command to start the same container again.
```
docker start <container id>
```