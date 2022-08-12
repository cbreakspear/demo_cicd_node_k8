--To Install into Kubernetes run the following commands
az acr create --name <registry-name> --resource-group myResourceGroup --sku Basic --admin-enabled true

-- UPLOAD to the ACR
docker push <registry-name>.azurecr.io/appsvc-tutorial-custom-image:latest

az acr show --name cbtestacr --query "id" --output tsv

--CREATE SP
az ad sp create-for-rbac --name "myNodeDemoApp" --role contributor --scope /subscriptions/71641fdb-8f5f-47a2-997d-0ef754c2ccfb/resourceGroups/rg-delete --sdk-auth

--CREATE THE FOLLOWING SECRETS 
AZURE_CREDENTIALS	The entire JSON output from the az ad sp create-for-rbac command
service_principal	The value of <clientId>
service_principal_password	The value of <clientSecret>
subscription	The value of <subscriptionId>
tenant	The value of <tenantId>
registry	The name of your registry
repository	azuredocs
resource_group	The name of your resource group
cluster_name	The name of your cluster 

--YOU WILL ALSO HAVE TO UPDATE THE k8Deploy File yaml

--OTHER STUFF THAT COULD HELP
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --generate-ssh-keys --attach-acr <acrName>

--To build docker file locally
docker build -t cbreakspear/mynodeimage .

--If you are debugging this app on Linux you may need to change the PORT higher than 1336


 Once you have tested the Docker image locally you will push the image to
 docker hub or another repo where you will reference it in you K8 yaml file
 so it can be pulled and deployed into kubernetes
   

 ----CREATE AZURE KUBERNETES CLUSTER
 az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --generate-ssh-keys --attach-acr <acrName>

 ----GET ACCESS TO THE CLUSTER
 az aks get-credentials --resource-group myResourceGroup --name myAKSCluster


 git push --set-upstream origin Stage-Branch