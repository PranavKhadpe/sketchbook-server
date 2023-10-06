# sketchbook-server


## Setting up a database:
1. Create an account on MongoDB Atlas.
2. Setup a new cluster.
3. Obtain the connection string, usually in the form: **'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'**
4. Add it to index.js
   ```mongoose.connect("ADD YOUR CONNECTION STRING", { useNewUrlParser: true, useUnifiedTopology: true });```

## Hosting the server:
I just use Azure to host the server. If, like me, you'd rather use the Azure Portal (website) instead of the Azure CLI to deploy your Node.js application, you can follow the steps below:

1. Sign in to Azure Portal:
   1. Navigate to Azure Portal.
   2. Sign in with your Azure account.

2. Create a Resource Group:
   1. On the Azure Portal dashboard, click on “Resource groups”.
   2. Click the "+ Add" button.
   3. Select your subscription, give your resource group a name, and select a region. Click "Review + create", and then click "Create".

3. Create an App Service Plan:
   1. In the Azure Portal dashboard, click on “App services”.
   2. Click the "+ Add" button.
   3. Select your subscription and the resource group you just created.
   4. Enter a unique name for your app.
   5. Under the "Publish" dropdown, choose "Code".
   6. For the runtime stack, select an appropriate Node.js version.
   7. Select the operating system (usually, Linux is fine).
   8. Under "Region", select an appropriate region (same as your resource group, ideally).
   9. Under "App Service plan", click on "Create new" and give it a name. For SKU and size, you can start with the default or select a more appropriate plan based on your needs.
   10. Click "Review + create" and then click "Create".

4. Deploy from Local Environment:
   1. Once the App Service is created, go to the "Overview" tab.
   2. In the menu, under "Deployment", click on “Deployment Center”.
   3. For source control, select “Local Git”.
   4. Click "Continue" and then click "Finish".
   5. After the configuration is completed, you'll see a Git URL under "Deployment Center" > "Settings" > "Git" > "Git Clone Uri".
   6. Clone this URL on your local machine.
   7. Add your Node.js app to this repository and commit the changes.
   8. Push your changes to the Azure remote.

5. Browse Your Application:
   1. After you've pushed your changes, go back to your App Service's "Overview" tab.
   2. You'll see a URL that looks like http://<app-name>.azurewebsites.net. Click on this URL to navigate to your deployed application.

