# Deployment & Security Setup

## 🔒 Before Going Live

Your repository is now **mega secure** with all hardcoded credentials removed. Follow these steps:

### 1. GitHub Pages Settings
- Go to **Settings → Pages**
- Ensure **Source** is set to `Deploy from a branch`
- Select `main` branch
- HTTPS is automatically enabled ✅

### 2. Branch Protection (Recommended)
- Go to **Settings → Branches**
- Add rule for `main`:
  - ✅ Require a pull request before merging
  - ✅ Require approvals
  - ✅ Require status checks to pass
  - ✅ Include administrators

### 3. Repository Settings (Recommended)
- **Settings → General**
  - ☑️ Disable forking
  - ☑️ Disable issues
  - ☑️ Disable discussions
  - ☑️ Disable wiki

### 4. Configure Credentials for Supabase

The admin panel now loads credentials **securely**:

**Option A: Local Development (Testing)**
```bash
# In browser console (dev only):
RBAF_CONFIG.setLocal('your-url', 'your-anon-key', 'your-email')
```

**Option B: Environment Variables (Production)**

For production, set environment variables in your deployment platform:
- GitHub Codespaces → Secrets
- Vercel/Netlify → Environment Variables
- Docker → -e flags

**Variable Names:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON`
- `VITE_ADMIN_EMAIL`

### 5. Test the Admin Panel
1. Open your site at `https://yourdomain.com`
2. Check browser console for warnings
3. If you see "⚠️ Configuration incomplete" - set credentials using Option A or B above
4. Click the Admin button (bottom-right) to test login

---

## 📋 Security Checklist

✅ Hardcoded secrets removed from git  
✅ Credentials loader (config.js) created  
✅ .env.example template provided  
✅ .gitignore prevents accidental commits  
✅ SECURITY.md with best practices  
✅ HTTP security headers configured  
⏳ (Optional) Branch protection enabled  
⏳ (Optional) Forking/Issues disabled  

---

## 🚀 Going Live

When ready:

1. **Verify no secrets in git:**
   ```bash
   git log --all -p | grep -i "supabase_url\|supabase_anon\|admin_email"
   ```
   If found, see [git-rewrite docs](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

2. **Set production credentials** in your deployment platform

3. **Test thoroughly** before promoting to production

---

## ❓ FAQ

**Q: Where do I store my Supabase credentials?**  
A: Never in git.Use environment variables or local storage (dev only). See SECURITY.md.

**Q: Can I use multiple admin accounts?**  
A: Yes! Supabase Auth supports multiple users. Create them in the Supabase dashboard.

**Q: What if I accidentally committed credentials?**  
A: Rotate them immediately in Supabase and rewrite git history if needed.

**Q: How do I reset my admin password?**  
A: In Supabase Auth → Users → click user → click password field to reset.

---

Last updated: June 2026
