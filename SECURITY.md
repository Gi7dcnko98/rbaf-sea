# Security Policy

## Critical Security Information

This repository contains a **public website** but **sensitive configuration** must be kept private.

### ⚠️ Never Commit These

**NEVER commit the following to version control:**

- Supabase URL or Anon Key
- Admin email address
- Database credentials
- API keys or tokens
- Passwords or authentication secrets

### Setup Instructions

1. **Configure Environment Variables Locally Only**
   - Create a `.env` file in your local project (NOT committed to Git)
   - Store your Supabase credentials there
   - Use `.gitignore` to prevent accidental commits

2. **Supabase Configuration**
   - Your Supabase project must have Row-Level Security (RLS) enabled
   - Restrict database access to authenticated admin users only
   - Use strong, unique passwords for all Supabase accounts
   - Enable 2FA on your Supabase account

3. **Admin Account Security**
   - Use a strong, unique admin password (16+ characters, mixed case, numbers, symbols)
   - Store it securely in a password manager
   - Change it periodically
   - Never use your password in code or commits

### Reporting Security Vulnerabilities

If you discover a security issue, **do not open a public issue**. Email the maintainer privately.

---

## Repository Security Measures

✅ **GitHub Pages HTTPS** — All traffic is encrypted  
✅ **Content Security Policy** — Strict CSP header prevents XSS  
✅ **X-Frame-Options** — Clickjacking prevention (DENY)  
✅ **X-Content-Type-Options** — MIME-type sniffing prevention  
✅ **Referrer-Policy** — Controlled referrer leakage  
✅ **Permissions-Policy** — Restricts browser feature access  
✅ **Server-Side Authentication** — Supabase handles auth securely  
✅ **Row-Level Security** — Database access controlled by RLS policies  

---

## Admin Panel Security

The admin panel uses:

- **Server-side authentication** via Supabase Auth
- **Session tokens** stored securely in browser storage
- **Password-protected access** (no hardcoded credentials)
- **Automatic session management** with refresh tokens
- **HTTPS only** — credentials never sent over plain HTTP

---

## Best Practices

### For Development

1. ✅ Use `.env` files locally (never commit)
2. ✅ Use environment variables for all secrets
3. ✅ Sign commits when possible
4. ✅ Review changes before pushing
5. ✅ Keep dependencies up-to-date

### For Production

1. ✅ Enable branch protection on `main`
2. ✅ Require reviews before merge
3. ✅ Monitor repository access logs
4. ✅ Rotate credentials periodically
5. ✅ Keep Supabase RLS policies strict

---

## Zero External Dependencies

This project uses **only one external JavaScript library**:

- `@supabase/supabase-js` — For authentication and database access

All other code is vanilla HTML, CSS, and JavaScript. This minimizes attack surface.

---

## Contact

For security concerns, contact the maintainer privately. Do not open public issues for security vulnerabilities.

---

Last Updated: June 2026
