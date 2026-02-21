# GitHub SSH Authentication Setup

## Your SSH Public Key

Copy the key below and add it to your GitHub account:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIG7+DrO8sUBMq5R0nalrMwS7ug/081Gow3v7+vAO0ZAi github-deployment
```

## Steps to Add Your SSH Key to GitHub

1. **Go to GitHub Settings:**
   - Visit: https://github.com/settings/keys
   - Or: Settings → SSH and GPG keys

2. **Click "New SSH key"**

3. **Fill in the form:**
   - Title: `A2S Developer Machine`
   - Key type: Authentication Key
   - Key: Paste the entire public key from above (starting with `ssh-ed25519`)

4. **Click "Add SSH key"**

5. **Verify it worked:**
   - Run: `ssh -T git@github.com`
   - You should see: `Hi maniatwork! You've successfully authenticated`

## After Adding the Key

Once you've added the SSH key to GitHub, you can push your code:

```powershell
cd "c:\Users\lonel\OneDrive\Desktop\a2sNew\A2S-main\A2S-main"
git push -u origin main --force
```

## Private Key Location

Your private key is stored at: `C:\Users\lonel\.ssh\id_ed25519`

- Keep this file secure and never share it!
- Git will use it automatically when pushing to GitHub

## Need Help?

- GitHub SSH Docs: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Troubleshooting: https://docs.github.com/en/authentication/troubleshooting-ssh
