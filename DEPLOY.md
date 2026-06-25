# Illashimwe Adventure — cPanel Deployment Guide

## STEP 1 — Build the Project

Run this in your project folder (on your computer, not cPanel):

```bash
npm run build
```

This creates an `out/` folder with all static HTML, CSS, JS, images, and your `submit.php`.
The `out/` folder is what you upload to cPanel.

---

## STEP 2 — Prepare the Upload

Before uploading, zip the **contents** of `out/` (not the folder itself):

- On Mac: open `out/`, select all files (Cmd+A), right-click → Compress
- On Windows: open `out/`, select all files (Ctrl+A), right-click → Send to → Compressed folder

Name it `illashimwe-site.zip`.

> **Important:** You're zipping what's INSIDE `out/`, not the `out/` folder.
> When you unzip on the server, files go directly into `public_html/`.

---

## STEP 3 — Upload to cPanel

1. Log into your cPanel at `https://yourhostingdomain.com/cpanel` or your host's login URL
2. Click **File Manager**
3. Navigate to **`public_html/`**
4. If there are old files from a previous deploy, delete them first (select all → Delete)
5. Click **Upload** (top toolbar)
6. Upload your `illashimwe-site.zip`
7. Go back to `public_html/`, find `illashimwe-site.zip`, right-click → **Extract**
8. Extract to `/public_html/` (leave the path field as-is)
9. Delete `illashimwe-site.zip` after extracting

**Verify these files exist directly in `public_html/`:**
- `index.html`
- `.htaccess`
- `submit.php`
- `_next/` folder
- `images/` folder
- `font/` folder

> If `.htaccess` is hidden: in File Manager, click **Settings** (top right) → check **Show Hidden Files**

---

## STEP 4 — Email Setup in cPanel

This makes `submit.php` send emails that actually arrive (not spam).

### 4a — Create the Email Account

1. In cPanel → **Email Accounts**
2. Click **Create**
3. Fill in:
   - Domain: `illashimweadventures.com`
   - Username: `info`
   - Password: (strong password — save it!)
4. Click **Create**

Repeat to also create `noreply@illashimweadventures.com` (used as the From address in submit.php).

### 4b — Enable DKIM and SPF (Critical for Deliverability)

1. In cPanel → **Email Deliverability** (or "Email Deliverability Manager")
2. Find `illashimweadventures.com` in the list
3. Click **Repair** if there are any warnings, OR click **Manage** → enable both:
   - **DKIM** — cryptographic email signature
   - **SPF** — tells mail servers your server is allowed to send for your domain

> These two settings are the most important things to prevent emails going to spam.

### 4c — Verify PHP Mail Works

1. In cPanel → **Terminal** (or use your FTP client)
2. Create a test file `public_html/mailtest.php`:

```php
<?php
$sent = mail('your-personal-email@gmail.com', 'Test', 'If you see this, mail() works!');
echo $sent ? 'Mail sent!' : 'Mail FAILED';
```

3. Visit `https://illashimweadventures.com/mailtest.php` in your browser
4. Check if the email arrives (check spam folder too)
5. **Delete `mailtest.php` afterwards** — never leave test files on the server

---

## STEP 5 — DNS Records (Set in Your Domain Registrar)

If your domain DNS is managed by your hosting provider, these may already be set.
If your domain is at Namecheap, GoDaddy, Cloudflare, etc., add these:

### Required DNS Records

| Type | Host/Name | Value |
|------|-----------|-------|
| A | `@` | Your server IP (found in cPanel → General Information) |
| A | `www` | Same server IP |
| CNAME | `www` | `illashimweadventures.com` (if using CNAME instead of A) |
| MX | `@` | `mail.illashimweadventures.com` (priority 0) |

### Email Deliverability Records (Add These)

Your cPanel Email Deliverability page will show you the exact values — copy from there:

| Type | Host/Name | Value |
|------|-----------|-------|
| TXT | `@` | `v=spf1 +a +mx +ip4:YOUR_SERVER_IP ~all` |
| TXT | `default._domainkey` | (the DKIM key — long string, copy from cPanel) |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@illashimweadventures.com` |

> DNS changes take 1-48 hours to propagate worldwide.

---

## STEP 6 — Test the Contact Forms

After deployment, test each form:

1. **Contact form** → https://illashimweadventures.com/contact
2. **Plan Trip form** → https://illashimweadventures.com/plan-trip
3. **Get a Quote form** → https://illashimweadventures.com/quote
4. **Safari Quiz** → on the home page

For each: fill in real details, submit, and check if email arrives at `info@illashimweadventures.com`.

Check both inbox and **spam folder** the first time. If emails go to spam, it means DKIM/SPF aren't fully propagated yet — wait 24 hours and test again.

---

## STEP 7 — Set PHP Configuration (if mail fails)

If `mail()` doesn't work, check PHP settings via cPanel:

1. cPanel → **Select PHP Version** (or MultiPHP Manager)
2. Make sure PHP 8.0+ is selected for your domain
3. Click **PHP Options** / **php.ini** settings
4. Verify `sendmail_path` is set (leave as default unless your host says otherwise)

If your host has disabled `mail()`, ask them to enable it, or switch to SMTP (see below).

---

## STEP 8 — SMTP Upgrade (Optional but Recommended)

If emails still don't work or go to spam, upgrade `submit.php` to use SMTP.

### Install PHPMailer via cPanel Terminal

```bash
cd public_html
curl -sS https://getcomposer.org/installer | php
php composer.phar require phpmailer/phpmailer
```

Then replace the `mail()` call in `submit.php` with:

```php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host       = 'mail.illashimweadventures.com';  // cPanel SMTP host
$mail->SMTPAuth   = true;
$mail->Username   = 'noreply@illashimweadventures.com';
$mail->Password   = 'YOUR_EMAIL_PASSWORD';             // password you created in Step 4a
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

$mail->setFrom('noreply@illashimweadventures.com', 'Illashimwe Adventure');
$mail->addAddress('info@illashimweadventures.com');
$mail->addReplyTo($safeReplyTo);
$mail->Subject = $subject;
$mail->Body    = $body;
$mail->send();
```

> SMTP via your own cPanel mailbox almost never goes to spam.

---

## STEP 9 — Google Search Console (for SEO)

1. Go to https://search.google.com/search-console
2. Click **Add Property** → URL prefix → `https://illashimweadventures.com`
3. Choose **HTML tag** verification
4. Copy the `content="..."` value (just the token, e.g. `abc123xyz...`)
5. Open `app/layout.tsx` on your computer, find line 99-101:
   ```ts
   verification: {
     // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
   },
   ```
6. Uncomment and update:
   ```ts
   verification: {
     google: "paste-your-token-here",
   },
   ```
7. Rebuild (`npm run build`) and re-upload only `index.html` from `out/`
8. Back in Search Console → click **Verify**
9. After verification → **Sitemaps** → add `https://illashimweadventures.com/sitemap.xml`

---

## STEP 10 — Post-Deployment Checklist

Run through this after every deploy:

- [ ] Site loads at `https://illashimweadventures.com`
- [ ] Redirects HTTP → HTTPS automatically
- [ ] All nav links work (safari, kilimanjaro, destinations, contact)
- [ ] Contact form submits and email arrives
- [ ] Plan-trip form submits and email arrives
- [ ] Quote form submits and email arrives
- [ ] Safari quiz submits and email arrives
- [ ] Site works on mobile (test on real phone)
- [ ] Images load (no broken image icons)
- [ ] No browser console errors (F12 → Console tab)

---

## Re-deploying After Changes

Every time you update the site:

```bash
npm run build
```

Then re-upload the changed files. For small updates, you can upload just the changed files instead of everything. For big updates, re-upload everything.

---

## Useful cPanel Settings Reference

| What | Where in cPanel |
|------|----------------|
| Upload files | File Manager |
| Email accounts | Email → Email Accounts |
| SPF/DKIM | Email → Email Deliverability |
| PHP version | Software → Select PHP Version |
| Error logs | Metrics → Errors |
| Database (not used) | Databases → MySQL |
| SSL Certificate | Security → SSL/TLS |

---

## Files That Must Be in `public_html/`

```
public_html/
├── index.html               ← home page
├── .htaccess                ← routing + security headers + HTTPS redirect
├── submit.php               ← PHP email handler for all 4 forms
├── sitemap.xml              ← for Google Search Console
├── _next/                   ← JS/CSS bundles
├── font/                    ← Molot.otf custom font
├── images/                  ← all site images
├── logo/                    ← logo files
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── safari/
│   └── index.html
└── ... (all other pages)
```
