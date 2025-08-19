# Email Setup Guide for PropertyHub

This guide will help you set up the email functionality using Nodemailer to send contact form submissions to admin.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install nodemailer @types/nodemailer
```

### 2. Create Environment Variables
Create a `.env.local` file in your project root with:

```env
# Email Configuration for Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@propertyhub.com
```

### 3. Gmail App Password Setup
For Gmail, you need to use an App Password:

1. **Enable 2-Factor Authentication** on your Google account
2. Go to **Google Account settings** > **Security** > **App passwords**
3. Generate a new app password for "Mail"
4. Use that password in `EMAIL_PASS`

### 4. Alternative Email Services
You can modify the service in `app/api/contact/route.ts`:

```typescript
// For Outlook/Hotmail
service: 'outlook'

// For Yahoo
service: 'yahoo'

// For custom SMTP
host: 'smtp.yourdomain.com',
port: 587,
secure: false
```

## 📧 How It Works

### Contact Form Flow:
1. User fills out contact form on website
2. Form submits to `/api/contact` endpoint
3. System sends **two emails**:
   - **Admin Notification**: Beautiful formatted email to admin with inquiry details
   - **Customer Auto-reply**: Thank you message with inquiry summary

### Email Features:
- ✨ Beautiful HTML templates with gradients
- 📱 Responsive design for all devices
- 🔔 Instant admin notifications
- 💬 Professional customer auto-replies
- 📊 Inquiry details and timestamps

## 🎨 Customization

### Modify Email Templates
Edit the HTML templates in `app/api/contact/route.ts`:

- **Admin Email**: Change colors, layout, and content
- **Customer Email**: Customize thank you message and branding
- **Subject Lines**: Modify email subjects

### Add More Fields
To add more form fields:

1. Update the contact form component
2. Modify the API route to handle new fields
3. Include new fields in email templates

## 🛡️ Security Considerations

- ✅ Input validation and sanitization
- ✅ Rate limiting (recommended for production)
- ✅ Environment variable protection
- ✅ Error handling and logging

## 🚨 Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Check your email and app password
   - Ensure 2FA is enabled for Gmail

2. **"Connection timeout"**
   - Check your internet connection
   - Verify email service settings

3. **"Authentication failed"**
   - Double-check environment variables
   - Restart your development server

### Testing:
1. Fill out the contact form
2. Check admin email inbox
3. Verify customer auto-reply
4. Check console for any errors

## 📱 Usage

### Add Contact Form to Pages:
```tsx
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}
```

### Contact Form Features:
- 📝 Name, email, phone, subject, message fields
- ✅ Form validation and error handling
- 🎨 Beautiful styling with gradients
- 📧 Instant email notifications
- 🔄 Loading states and success/error messages

## 🎯 Next Steps

1. **Install dependencies** and set up environment variables
2. **Test the contact form** with your email
3. **Customize email templates** to match your brand
4. **Add rate limiting** for production use
5. **Set up email monitoring** and analytics

---

**Need Help?** Check the console for error messages or review the API route configuration.
