# QR Code Generator PWA

A high-performance, feature-rich, fully client-side Progressive Web App (PWA) designed to generate highly customizable QR codes with seamless branding integration. Built with a focus on privacy, responsiveness, and control, this utility handles all compilation and rendering directly inside the browser—meaning your data and uploaded graphics never touch an external server.

---

## 🚀 Features

- **Advanced Logo Integration**: Effortlessly stamp custom graphics onto the center of your QR codes.
  - **Transparency Support**: Toggle transparent layers to seamlessly support custom shapes (circular masks, rounded boxes, stars, etc.) directly overlapping the matrix modules.
  - **Dynamic Masking**: Disable transparency to draw a clean, solid background mask protecting the readability of the underlying barcode structure.
  - **Precise Slider Scaling**: Fine-tune logo size from 10% up to 35% bounding boxes.
- **State Persistence Engine**: All user configurations—including custom colors, manual margins, error correction settings, inclusion states, and even your uploaded logo graphic—are securely saved to browser `localStorage` for a continuous workflow across visits.
- **Smart Matrix & Margin Controls**:
  - **Dynamic Margin Optimization**: Automatically computes the optimal ISO-compliant quiet zone based on matrix module density.
  - **Manual override**: Hand over precise padding control to the pixel level when designing localized mockups.
- **Fidelity-Preserving Live Previews**: Implements CSS Nearest Neighbor (`image-rendering: pixelated`) interpolation for responsive viewport downscaling, keeping the interactive preview perfectly crisp and readable at any display scale.
- **Full PWA Capability**: Equiped with a Service Worker architecture and manifest file, enabling instantaneous offline access, custom standalone app configurations, and multi-platform native-feeling installations.
- **High-Resolution Exports**: Fully independent vector-equivalent canvas drawing for exact 1:1 crispness during downloads or seamless system clipboard copies.

---

## 🛠️ Architecture & Core Scaling Principles

Understanding how this utility handles imagery ensures optimal results when producing target designs:

### 1. Vector Representation (The QR Barcode Matrix)
The barcode data itself does not experience interpolation artifacts. When a dimension is specified (e.g., `1000px`), the underlying `node-qrcode` engine mathematically computes module sizes and renders precise geometrical paths directly onto an isolated HTML5 canvas context at a 1:1 native physical pixel translation. 

### 2. Live Port Viewport Scaling
To keep the UI sleek on compact, mobile, or split-screen environments, an dynamic scale layout handles heavy asset previews. By configuring:
```css
canvas { image-rendering: pixelated; }
```
The browser uses **Nearest Neighbor** scaling rather than smooth Bilinear interpolation. This forces individual pixel blocks to retain perfect, sharp edges inside the user interface canvas wrapper instead of introducing blurred margins.

### 3. Logo Resizing
When rendering brand imagery onto the code matrix, the runtime context invokes `ctx.drawImage()`. The system exploits default browser engine pipelines, applying high-quality **Bicubic/Bilinear filtering** to gracefully downscale dense corporate SVG/PNG inputs, resolving fine design curves cleanly while isolating the absolute sharpness of the surrounding QR matrix.

---

## 📦 Quick Start & Deployment

### Local Environment Setup
Since this is an entirely self-contained, client-side PWA, you can execute it immediately out of a single local directory:

1. Clone or download the source files: `index.html`, `qrcode.min.js`, `manifest.json`, and `sw.js`.
2. Ensure all assets sit uniformly within the same target folder directory.
3. Open `index.html` inside any modern evergreen browser (Chrome, Edge, Firefox, Safari).

### Hosting via GitHub Pages
This project is engineered to work seamlessly out-of-the-box with static hosting providers:
1. Push the project workspace directly to a public or private GitHub repository.
2. Navigate to repository **Settings** > **Pages**.
3. Point the build Source to your production branch (e.g., `main` or `root`) and click **Save**.
4. Your application will resolve live under your custom GitHub IO subdomain.

---

## 📄 License & Attribution

QR Code Generator PWA

Generative AI prompting (Google Gemini) and testing:
Copyright (c) 2026 Mike Young

Source: [https://github.com/myoung8223/qrcodegen/](https://github.com/myoung8223/qrcodegen/)
License: MIT
    
This application incorporates the QR code library developed by Ryan Day.
Library copyright and licensing remain with the original author.

Source: [https://github.com/soldair/node-qrcode](https://github.com/soldair/node-qrcode)
License: MIT

### Full Legal Text (MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
