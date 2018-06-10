## Setting up Git + collaborative writing local respository
* [Install git on your desktop](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Prepare a working directory e.g AP_Book, then opens the terminal and navigate to the directory, then type:

  ```
  git init
  ```

* Download the respository into your desktop, terminal command:

  ```
  git pull https://siusoon@bitbucket.org/siusoon/aesthetic-programming-a-handbook-of-software-studies-or.git
  ```

---
## Often used commands:
* add/remove files to staging:

  ```
  git add filename.extension
  ```

  //add all files/changes

  ```
  git add --all
  ```

  // need to remove one by one

  ```
  git rm filename.extension
  ```

* Commit

  ```
  git commit -m '<commit_message>'
  ```

* Upload the files to bitBucket production > bitbucket's respository:

  ```
  git push https://bitbucket.org/siusoon/aesthetic-programming-a-handbook-of-software-studies-or/src/master/
  ```

* other useful commands:

  ```
  git status
  ```

  ```
  git diff    
  ```

* other useful bitBucket commands [here](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

---

## How to run a HTML (with associated js files)?

Copy and paste the HTML bitBucket link [here](https://raw.githack.com/).

---

## Other references:
- [Mark down cheatsheet - files with .md](https://guides.github.com/features/mastering-markdown/)
- Video: What is Git? (Git-SCM) • Git Basics [#1](https://www.youtube.com/watch?v=8oRjP8yj2Wo&list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH) [#2](https://www.youtube.com/watch?v=uhtzxPU7Bz0&index=2&list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH)
- [Git Tutorial - for command line users](https://try.github.io/levels/1/challenges/1)

---

Original ReadME
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
