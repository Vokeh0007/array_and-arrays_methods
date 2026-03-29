# JavaScript Assignment Submission Instructions (GitHub)

## Objective

Each student must: - Solve only their assigned quiz question - Use Git
branching - Submit work through GitHub Pull Requests

------------------------------------------------------------------------

## Important Rules

-   Do NOT work directly on the `main` branch.
-   Do NOT solve questions assigned to other students.
-   Push only your own work.
-   Follow branch naming format.

------------------------------------------------------------------------

## Step 1 --- Fork or Clone the Repository

### If Forking (Recommended)

1.  Open the GitHub repository link.
2.  Click **Fork** (top right corner).
3.  GitHub will create a copy under your account.

Then clone your fork:

``` bash
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name
code ..
```

------------------------------------------------------------------------

### If Not Forking (If You Are Added as Collaborator)

Clone directly:

``` bash
git clone https://github.com/ORIGINAL-OWNER/repo-name.git
cd repo-name
```

------------------------------------------------------------------------

## Step 2 --- Create Your Branch

Branch naming format:

    quiz/yourname-questionnumber

Example:



``` bash
git checkout -b quiz/john-q3
```

------------------------------------------------------------------------

## Step 3 --- Write Your Solution

1.  Go to the **solutions** folder.
2.  Create your file using format:

```{=html}
<!-- -->
```
    yourname-qX.js //kevin-q9.js


Example:

    john-q3.js

Write your JavaScript solution inside that file.

Only solve your assigned question.

------------------------------------------------------------------------

## Step 4 --- Save and Check Work

Check file status:

``` bash
git status
```

Add files:

``` bash
git add .
```

Commit work:

``` bash
git commit -m "Solved Question X - Your Name"
```

Example:

``` bash
git commit -m "Solved Question 3 - John"
```

------------------------------------------------------------------------

## Step 5 --- Push Branch

``` bash
git push origin quiz/yourname-qX
```

Example:

``` bash
git push origin quiz/john-q3
```

------------------------------------------------------------------------

## Step 6 --- Create Pull Request

1.  Go to GitHub repository.
2.  Click **Compare & Pull Request**.
3.  Add title:

```{=html}
<!-- -->
```
    Quiz Question X Solution - Your Name

4.  Add description.
5.  Click **Create Pull Request**.

------------------------------------------------------------------------

## Step 7 --- Review Process

-   Do not merge your own pull request.
-   Wait for instructor review.

------------------------------------------------------------------------

## Common Mistakes

-   Working on main branch
-   Solving wrong question
-   Forgetting to push branch
-   Self-merging pull request

------------------------------------------------------------------------

## Good Coding Practice

-   Use meaningful variable names
-   Write readable code
-   Test code before committing
