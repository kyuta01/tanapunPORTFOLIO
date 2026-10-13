# Tanapun — Blooddusk Board Game & Mystery Journal Portfolio

เว็บไซต์ **Personal Portfolio** ภายใต้แนวคิด **BLOODDUSK BOARD GAME & MYSTERY JOURNAL** (ได้รับแรงบันดาลใจหลักด้านบรรยากาศ ตัวอักษร และรูปแบบภาพประกอบจากเกมแนวผจญภัยสืบสวน [Rusty Lake Hotel](https://www.rustylake.com/adventure-games/rusty-lake-hotel.html) ผสมผสานเสน่ห์ของกระดานเกมปริศนาและสมุดภาพลึกลับยามค่ำคืน) สำหรับนำเสนอผลงานด้าน **Digital Art**, **Concept Art**, **Game Art** และ **Game Development** ของ **ธนาพันธ์ วรพันธ์ (Tanapun)** นิสิตสาย Creative Media **มหาวิทยาลัยมหาสารคาม**

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
tanapun-portfolio/
│
├── index.html            # 1. หน้าแรก (Home) — Stage 01: Prologue & Creator Card
├── education.html        # 2. หน้าการศึกษา (Education) — Stage 02: Academic Progression Path
├── portfolio.html        # 3. หน้าผลงาน (Portfolio) — Stage 03: The Atelier Deck (แกลเลอรีการ์ดผลงาน)
├── activity.html         # 4. หน้ากิจกรรม (Activity) — Stage 04: Logbook & Encounter Chronicles
├── contact.html          # 5. หน้าติดต่อ (Contact) — Stage 05: Dispatch Station & Telegram Form
├── style.css             # สไตล์ชีต CSS3 ธีม Blooddusk Board Game & Mystery Storybook
├── script.js             # Vanilla JavaScript ควบคุมเมนูมือถือ, ตัวกรองสำรับการ์ด, โมดัล และฟอร์ม
├── README.md             # คู่มือการใช้งาน การทดสอบ และการ Deploy บน Netlify
│
└── images/               # โฟลเดอร์จัดเก็บรูปภาพผลงานและรูปถ่าย
    ├── profile.svg       # ภาพถ่ายตัวละครผู้สร้าง (แทนที่ด้วยภาพถ่ายจริงของคุณ เช่น profile.jpg)
    ├── portfolio-art1.svg   # การ์ดผลงาน Digital Art 1
    ├── portfolio-art2.svg   # การ์ดผลงาน Concept Art 2
    ├── portfolio-art3.svg   # การ์ดผลงาน Character Design (Blooddusk tones)
    ├── portfolio-game1.svg  # การ์ดผลงาน 3D Game Art
    ├── portfolio-game2.svg  # การ์ดผลงาน Game Development Prototype
    ├── portfolio-game3.svg  # การ์ดผลงาน Game UI & Level Art
    ├── activity-1.svg       # บันทึกภาพกิจกรรมการอบรม / เวิร์กชอป
    ├── activity-2.svg       # บันทึกภาพการแข่งขัน / การประกวด
    └── activity-cert.svg    # บันทึกภาพใบประกาศนียบัตร / วุฒิบัตร
```

---

## 🎨 จุดเด่นด้านการออกแบบ: BLOODDUSK BOARD GAME

1. **บรรยากาศ Blooddusk & แผ่นกระดานเกม (Tangible Board Game Canvas)**:
   - **พื้นหลังภายนอก (Blooddusk Canvas)**: ใช้สีดำอมม่วงเข้มและเทาพลัมหลังพระอาทิตย์ตกดิน (`#17151C` ผสม `#282331`) พร้อมเส้นตารางพิกัดกระดานเกมจาง ๆ
   - **แผ่นกระดานเนื้อหา (Board Game Mat)**: แผ่นการ์ดบอร์ดสีครีมนวล (Warm Ivory `#F1E7D2` และ Antique Paper `#E4D7BD`) มีขอบซ้อนชั้นและเส้นประขอบเขตกระดาน (Dashed boundary track)
   - **มิติของชิ้นส่วนเกม (Card Pieces & Tiles)**: การ์ดภารกิจ การ์ดตัวละคร และการ์ดผลงานมีเงาตกกระทบแบบมีมิติความหนาจริง (`box-shadow`)
   - **ยกเลิกสีแดงเป็นสีเน้น**: เปลี่ยนมาใช้สีม่วงอ่อน (Soft Lavender `#C8BBD8`) และม่วงหม่น (Muted Purple `#81758F`) เป็นสีเน้นหลักร่วมกับหมึกพิมพ์สีดำเข้ม (`#28242A`) บนกระดาษ

2. **ตัวอักษรแบบ Rusty Lake (Quirky Storybook Typography)**:
   - หัวข้อใหญ่และชื่อแบรนด์: ใช้ฟอนต์ **Amatic SC** ลักษณะ Handwritten แคบสูง มีเสน่ห์แบบภาพประกอบวาดด้วยมือในปกหนังสือเกมสืบสวน
   - ป้ายกำกับ รหัสการ์ด และพิกัด: ใช้ฟอนต์ **Special Elite** สไตล์พิมพ์ดีดโบราณ
   - เนื้อหาบรรยาย: ใช้ **Cormorant Garamond** ร่วมกับ **Noto Serif Thai** และ **Sarabun** เพื่อให้อ่านภาษาไทยและภาษาอังกฤษได้ชัดเจน สบายตา

3. **การจัดวางส่วนหัวและกระดานกึ่งกลาง (Centered Board Game Header)**:
   - ด้านบนสุด: ข้อความ `◇ PERSONAL ARCHIVE · THE BLOODDUSK BOARD ◇`
   - กึ่งกลาง: ชื่อ `TANAPUN` ตัวอักษร Rusty Lake Display ขนาดใหญ่
   - ใต้ชื่อ: เส้นตกแต่งสีม่วงหม่นพร้อมสัญลักษณ์ลูกเต๋า/กระดาน `─── ⚅ ───`
   - เมนูนำทาง: `HOME`, `EDUCATION`, `PORTFOLIO`, `ACTIVITY`, `CONTACT` กึ่งกลางสมดุล โดยสถานะหน้าปัจจุบันถูกล้อมกรอบด้วยสัญลักษณ์ `◇` และ Soft Lavender

4. **Footer รูปแบบเดียวกันทั้ง 5 หน้า**:
   - แถบข้อความด้านล่างกระดาน เส้นกั้นสีม่วงหม่น `◇ ── ⚅ ── ◇` ชื่อ `TANAPUN WORAPHAN` และสังกัด *Mahasarakham University*

---

## 🚀 วิธีทดสอบเว็บไซต์บนเครื่องของคุณ (Local Testing)

สำหรับผู้เริ่มต้น สามารถทดสอบเว็บไซต์ได้หลายวิธีดังนี้:

### วิธีที่ 1: ดับเบิลคลิกเปิดไฟล์โดยตรง (ง่ายที่สุด)
1. เปิดโฟลเดอร์โปรเจกต์ `e:\port` ใน File Explorer
2. ดับเบิลคลิกที่ไฟล์ `index.html`
3. เบราว์เซอร์ (Google Chrome, Microsoft Edge, Firefox, Brave ฯลฯ) จะเปิดหน้าเว็บไซต์ขึ้นมาทันที คุณสามารถคลิกเมนูเพื่อสลับหน้าได้ตามปกติ

---

### วิธีที่ 2: ใช้ VS Code Live Server (แนะนำสำหรับนักพัฒนา)
1. เปิดโฟลเดอร์โปรเจกต์ด้วยโปรแกรม **Visual Studio Code**
2. ติดตั้ง Extension ชื่อ **Live Server** (โดย Ritwick Dey)
3. คลิกขวาที่ไฟล์ `index.html` แล้วเลือก **"Open with Live Server"**
4. เว็บไซต์จะเปิดที่ `http://127.0.0.1:5500/index.html` และจะรีเฟรชหน้าจออัตโนมัติเมื่อมีการแก้ไขโค้ด

---

### วิธีที่ 3: ใช้ Local Web Server ผ่าน Terminal / PowerShell
หากมี Python ติดตั้งในเครื่อง สามารถเปิด PowerShell ในโฟลเดอร์โปรเจกต์แล้วรันคำสั่ง:
```powershell
python -m http.server 8000
```
จากนั้นเปิดเบราว์เซอร์ไปที่: `http://localhost:8000`

---

## 🌐 วิธีนำเว็บไซต์ขึ้นออนไลน์บน Netlify (Deployment Guide)

คุณสามารถนำเว็บไซต์นี้ไปเผยแพร่ออนไลน์ผ่าน **Netlify** ได้ฟรี 100% ภายในเวลาไม่ถึง 1 นาที:

### วิธีที่ 1: Netlify Drop (ลากแล้ววาง — ง่ายและเร็วที่สุด ไม่ต้องใช้ Git)
1. สมัครหรือเข้าสู่ระบบที่ [https://app.netlify.com](https://app.netlify.com)
2. ไปที่เมนู **Sites** หรือหน้า Dashboard
3. เลื่อนลงมาที่ส่วน **"Want to deploy a new site without connecting to Git? Drag and drop your site folder here"**
4. ลากโฟลเดอร์โปรเจกต์ (ที่มีไฟล์ `index.html`, `style.css`, ฯลฯ) โยนลงในกรอบพื้นที่ Drop
5. Netlify จะอัปโหลดและสร้าง URL ออนไลน์ให้ทันที เช่น `https://random-name-12345.netlify.app`
6. คุณสามารถเปลี่ยนชื่อโดเมนฟรีได้ที่:
   - ไปที่ **Site configuration** > **Change site name**
   - ตั้งชื่อเป็น `tanapun-portfolio` เว็บไซต์ของคุณจะกลายเป็น:
     👉 **`https://tanapun-portfolio.netlify.app`**

---

### วิธีที่ 2: Deploy ผ่าน GitHub (สำหรับอัปเดตแบบอัตโนมัติ)
1. สร้าง New Repository บน [GitHub](https://github.com) เช่น ชื่อ `tanapun-portfolio`
2. Push โค้ดทั้งหมดขึ้น GitHub:
   ```bash
   git init
   git add .
   git commit -m "Blooddusk Board Game Portfolio: Inspired by Rusty Lake"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/tanapun-portfolio.git
   git push -u origin main
   ```
3. ที่ [Netlify Dashboard](https://app.netlify.com) คลิก **"Add new site"** > **"Import an existing project"**
4. เลือก **GitHub** และค้นหา Repository `tanapun-portfolio`
5. ในช่อง **Build command** ให้ปล่อยว่างไว้ และ **Publish directory** ให้ใส่จุด `.` (หรือปล่อยว่างไว้)
6. คลิก **Deploy Site**

---

## 📝 คำแนะนำในการใส่รูปภาพและข้อมูลจริง

1. **เปลี่ยนรูปภาพประจำตัว (Character Portrait)**:
   - นำไฟล์รูปถ่ายจริงของคุณมาตั้งชื่อว่า `profile.jpg` แล้วนำไปใส่ในโฟลเดอร์ `images/`
   - ในไฟล์ `index.html` บรรทัดที่เรียกรูป ให้เปลี่ยนจาก `images/profile.svg` เป็น `images/profile.jpg`

2. **เพิ่มรูปภาพผลงานจริง (Artifact Cards)**:
   - นำไฟล์รูปผลงานความละเอียดสูงบันทึกไว้ในโฟลเดอร์ `images/`
   - เปิดไฟล์ `portfolio.html` เพื่อแก้ไขพาธรูปภาพ ชื่อผลงาน และรายชื่อเครื่องมือที่ใช้

3. **อัปเดตประวัติการศึกษาและกิจกรรม**:
   - เปิดไฟล์ `education.html` ค้นหาคำว่า `[กรอกข้อมูลจริง]` แล้วใส่ชื่อโรงเรียนเดิม ปีการศึกษา และเกรดเฉลี่ยจริง
   - เปิดไฟล์ `activity.html` ใส่ชื่อกิจกรรมการอบรม โครงการประกวด และภาพใบประกาศนียบัตรจริง

4. **อัปเดตช่องทางติดต่อ**:
   - เปิดไฟล์ `contact.html` ค้นหาคำว่า `[กรอกข้อมูลจริง]` แล้วระบุอีเมล เบอร์โทรศัพท์ และลิงก์ ArtStation / GitHub จริงของคุณ

---

© 2026 **ธนาพันธ์ วรพันธ์ (Tanapun)** · มหาวิทยาลัยมหาสารคาม
All rights reserved.
