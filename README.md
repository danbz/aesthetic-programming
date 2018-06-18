## Setting up Git + collaborative writing local respository
### Get git
1. check if Git has already been installed in your computer
```
git --version
```
2. If not, then download git here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Create a work local directory and setting up the remote directory
1. Create a working folder
2. Setting up the account
```
git config --global user.name "YOUR_USERNAME"
```
```
git config --global user.email "your_email_address@example.com"
```

### Download the latest respository
1. Download/Pull the specific respository
```
git pull REMOTE https://gitlab.com/siusoon/Aesthetic_Programming_Book.git
```

### Updated files and Push to git respository
1. add all modified files to staging
```
git add .
```
or
```
git add SPECIFIC FILE
```
2. Confirm by committing the launch
```
git commit -m "Your own description"
```
3. Upload/Push the files to the right respository
```
git push Remote Aesthetic_Programming_Book
```
