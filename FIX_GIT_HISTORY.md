# Fix: Remove API Key from Git History

## The Problem

GitHub is blocking your push because an **old commit** in the history still contains the API key. Even though we've fixed the files, the secret is still in the commit history.

## Solution: Rewrite the Commit History

You need to amend the commit that contains the secret. Here are two options:

### Option 1: Interactive Rebase (Recommended)

```bash
# Start interactive rebase for the last commit
git rebase -i HEAD~2

# In the editor that opens:
# - Change "pick" to "edit" for the commit ccf4fb2 (the one with the secret)
# - Save and close

# Git will stop at that commit. The files are already fixed, so just:
git add -A
git commit --amend --no-edit
git rebase --continue

# Force push (since we're rewriting history)
git push --force-with-lease
```

### Option 2: Amend and Force Push (Simpler)

Since you just made the commits and haven't pushed yet:

```bash
# Reset to before the problematic commit
git reset --soft HEAD~2

# Now all changes are staged. The files are already fixed, so:
git commit -m "Add complete project files and configuration (without secrets)"

# Force push
git push --force-with-lease
```

### Option 3: Use GitHub's Allow URL (Quick but Less Secure)

If you want to allow this one time:
1. Visit the URL GitHub provided:
   https://github.com/mfisher2121/mbraceinsightdmv/security/secret-scanning/unblock-secret/37djQ1NFTH7ey4vCqmLmzVnzndS
2. Click "Allow push"
3. Then `git push`

**⚠️ Warning:** This allows the secret to be in your git history. Not recommended for production.

## Recommended: Option 2 (Simplest)

Since you haven't pushed successfully yet, Option 2 is cleanest:

```bash
# Reset to before both commits
git reset --soft HEAD~2

# Files are already fixed, commit cleanly
git commit -m "Add complete project files and configuration"

# Push
git push
```

This creates one clean commit without the secret in history.

