--To Install into Kubernetes run the following commands
az acr create --name <registry-name> --resource-group myResourceGroup --sku Basic --admin-enabled true

docker push <registry-name>.azurecr.io/appsvc-tutorial-custom-image:latest

az acr show --name cbtestacr --query "id" --output tsv

az ad sp create-for-rbac --name "myNodeApp" --role contributor --scopes /subscriptions/d52d512f-70d6-4a95-ad00-b5bbdd10f91b/resourceGroups/rg-cbtest
 

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