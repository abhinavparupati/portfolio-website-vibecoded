# 🌟 Parupati Abhinav - Portfolio Website

A modern, responsive portfolio website built with **Blazor WebAssembly** showcasing my journey as a Computer Science student and Machine Learning enthusiast.

## 🚀 Live Demo

**🔗 [Visit Portfolio Website](https://abhinavparupati.github.io/portfolio-website-vibecoded/)**

*Replace `abhinavparupati` with your GitHub username after deployment*

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Static site generation with Blazor WebAssembly
- **🔧 Easy to Customize**: Simple to update content and styling
- **📊 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗️ Built With

- **Frontend**: Blazor WebAssembly (.NET 9.0)
- **Styling**: Custom CSS with modern design principles
- **Icons**: Font Awesome 6.4.0
- **Hosting**: GitHub Pages (Free)
- **CI/CD**: GitHub Actions for automatic deployment

## 📋 Sections Included

- 🏠 **Hero Section**: Eye-catching introduction with call-to-action buttons
- 👨‍💻 **About Me**: Personal introduction with GitHub profile picture
- 💼 **Experience**: Professional internships and achievements
- 🎓 **Education**: Academic background and GPA
- 🚀 **Projects**: Featured projects with technology stacks
- 🛠️ **Skills**: Technical skills organized by categories
- 🏆 **Certifications**: Professional certifications and achievements
- 📞 **Contact**: Multiple ways to get in touch

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free & Recommended)

1. **Fork or Create Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"
   - The workflow will automatically deploy your site

4. **Access Your Site**:
   ```
   https://YOUR_USERNAME.github.io/portfolio/
   ```

### Option 2: Netlify (Free)

1. **Deploy to Netlify**:
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

2. **Connect Your Repository**: Link your GitHub repository
3. **Build Settings**:
   - Build command: `dotnet publish SampleApp/BlazorWasm/BlazorWasm.csproj -c Release -o release`
   - Publish directory: `release/wwwroot`

### Option 3: Vercel (Free)

1. **Import Project**: Go to [Vercel](https://vercel.com) and import your repository
2. **Configure Build**:
   - Framework: Other
   - Build Command: `dotnet publish SampleApp/BlazorWasm/BlazorWasm.csproj -c Release -o release`
   - Output Directory: `release/wwwroot`

### Option 4: Azure Static Web Apps (Free Tier)

1. **Deploy to Azure**:
   - Use the Bicep templates in `/infra` folder
   - Follow Azure deployment guide
   - Free tier includes custom domains and SSL

## 🛠️ Local Development

1. **Prerequisites**:
   - .NET 9.0 SDK
   - Git

2. **Run Locally**:
   ```bash
   cd SampleApp/BlazorWasm
   dotnet run
   ```

3. **Access**: Open `https://localhost:5001` in your browser

## 🎨 Customization

### Update Personal Information

Edit `/SampleApp/BlazorWasm/Pages/Home.razor`:

```html
<!-- Update these sections with your information -->
<h1>Your Name</h1>
<p class="subtitle">Your Title</p>

<!-- Update GitHub profile image URL -->
<img src="https://avatars.githubusercontent.com/u/YOUR_GITHUB_ID?v=4" 
     alt="Your Name" />

<!-- Update experience, education, projects, etc. -->
```

### Modify Styling

Edit `/SampleApp/BlazorWasm/wwwroot/css/app.css`:

```css
/* Change color scheme */
.hero {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

/* Update other styles as needed */
```

### Add New Sections

1. Add HTML content to `Home.razor`
2. Add corresponding CSS styles
3. Update navigation if needed

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- ✅ Mobile-first design approach
- ✅ Touch-friendly buttons and links
- ✅ Optimized images and loading
- ✅ Smooth scrolling navigation

## 🔧 Technical Details

### Performance Features
- **Lazy Loading**: Components load on demand
- **Compression**: Brotli compression enabled
- **Caching**: Browser caching optimized
- **Minification**: CSS and JS minified in production

### SEO Features
- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading structure
- **Structured Data**: Enhanced search results

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. **Get GA4 Tracking ID** from Google Analytics
2. **Add to index.html**:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🤝 Contributing

Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star the repository if you like it

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

Need help with deployment or customization?

- 📧 **Email**: abhinavparupati@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/parupati-abhinav](https://linkedin.com/in/parupati-abhinav)
- 🐙 **GitHub**: [github.com/parupati-abhinav](https://github.com/parupati-abhinav)

---

**⭐ If this portfolio template helped you, please give it a star on GitHub!**

## 🚀 Quick Deploy Links

| Platform | Deploy Button | Features |
|----------|---------------|----------|
| **GitHub Pages** | [Enable in Settings](https://docs.github.com/en/pages) | ✅ Free, ✅ Custom Domain, ✅ SSL |
| **Netlify** | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start) | ✅ Free, ✅ Forms, ✅ Edge Functions |
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new) | ✅ Free, ✅ Analytics, ✅ Global CDN |
| **Azure** | [Deploy to Azure](https://portal.azure.com) | ✅ Enterprise, ✅ Scalable, ✅ Integrated |

Choose the platform that best fits your needs! 🎯
