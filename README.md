# sketchbook-server


Setting up a database:
1. Create an account on MongoDB Atlas.
2. Setup a new cluster.
3. Obtain the connection string, usually in the form: **'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'**
4. Add it to index.js
   ```
   mongoose.connect("ADD YOUR CONNECTION STRING", { useNewUrlParser: true, useUnifiedTopology: true });
   ```

