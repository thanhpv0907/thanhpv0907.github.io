// Simple Express mock server for testing contact form
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '../'))); // Serve static files from root

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const projectData = {
  vi: [
    {
      icon: "⚖️",
      title: "Kinh doanh, Thương mại & Pháp luật",
      items: [
        "<strong>Đàm phán dược phẩm:</strong> Dịch đuổi đàm phán thương mại và giới thiệu sản phẩm cho API Co., Ltd.",
        "<strong>Kinh doanh thời trang:</strong> Dịch kế hoạch ra mắt BST Golf cao cấp (UTAA Việt Nam x Đối tác Nhật).",
        "<strong>Công nghệ thông tin (IT):</strong> Đàm phán thương mại dự án IT (Dịch online).",
        "<strong>Pháp luật/Tài chính:</strong> Dịch online với luật sư về vay vốn kinh doanh tại Nhật."
      ]
    },
    {
      icon: "🎨",
      title: "Văn hóa, Giáo dục & Truyền thông",
      items: [
        "<strong>NXB Kim Đồng x Kadokawa:</strong> Dịch đuổi họp báo kỷ niệm 50 năm Việt-Nhật & giới thiệu truyện Công nữ Anio.",
        "<strong>Cuộc thi vẽ minh hoạ:</strong> Dịch đuổi tại sự kiện của Kadokawa.",
        "<strong>Hợp tác giáo dục:</strong> Dịch trao đổi giữa Chủ tịch Trường Quốc tế Nhật Bản và đại diện các trường Nhật ngữ.",
        "<strong>Dự án Mầm non:</strong> Dịch Nhật-Anh (đuổi) cho Academy Sharing và đối tác Singapore."
      ]
    },
    {
      icon: "🌟",
      title: "Dự án Khác & Kinh nghiệm",
      items: [
        "<strong>Linh kiện điện tử:</strong> Kinh nghiệm làm việc toàn thời gian (full-time) suốt 4 năm.",
        "<strong>Sự kiện & Du lịch:</strong> Dịch lễ đính hôn, lễ cưới; hướng dẫn khách Nhật tham quan Hà Nội và các tỉnh lân cận."
      ]
    }
  ],
  en: [
    {
      icon: "⚖️",
      title: "Business, Trade & Law",
      items: [
        "<strong>Pharmaceutical Negotiation:</strong> Consecutive interpretation for trade negotiation and product introduction for API Co., Ltd.",
        "<strong>Fashion Business:</strong> Interpreted launch plan for luxury Golf collection (UTAA Vietnam x Japanese Partner).",
        "<strong>IT:</strong> Trade negotiation for IT project (Online interpretation).",
        "<strong>Law/Finance:</strong> Online interpretation with lawyer regarding business loan in Japan."
      ]
    },
    {
      icon: "🎨",
      title: "Culture, Education & Media",
      items: [
        "<strong>Kim Dong Publishing x Kadokawa:</strong> Consecutive interpretation for press conference celebrating 50 years of Vietnam-Japan relations & introducing 'Princess Anio' manga.",
        "<strong>Illustration Contest:</strong> Consecutive interpretation at Kadokawa event.",
        "<strong>Education Cooperation:</strong> Interpreted exchange between Chairman of Japanese International School and representatives of Japanese language schools.",
        "<strong>Preschool Project:</strong> Japanese-English interpretation (consecutive) for Academy Sharing and Singaporean partner."
      ]
    },
    {
      icon: "🌟",
      title: "Other Projects & Experience",
      items: [
        "<strong>Electronic Components:</strong> 4 years of full-time work experience.",
        "<strong>Events & Tourism:</strong> Interpreted for engagement ceremonies, weddings; guided Japanese guests in Hanoi and neighboring provinces."
      ]
    }
  ],
  ja: [
    {
      icon: "⚖️",
      title: "ビジネス・貿易・法律",
      items: [
        "<strong>医薬品交渉:</strong> API Co., Ltd.の商談および製品紹介の逐次通訳。",
        "<strong>ファッションビジネス:</strong> 高級ゴルフコレクション（UTAA Vietnam x 日本パートナー）の立ち上げ計画の通訳。",
        "<strong>IT:</strong> ITプロジェクトの商談（オンライン通訳）。",
        "<strong>法律・金融:</strong> 日本での事業融資に関する弁護士とのオンライン通訳。"
      ]
    },
    {
      icon: "🎨",
      title: "文化・教育・メディア",
      items: [
        "<strong>キムドン出版社 x KADOKAWA:</strong> 日越外交関係樹立50周年記念および漫画『アニオー姫』紹介記者会見の逐次通訳。",
        "<strong>イラストコンテスト:</strong> KADOKAWAイベントでの逐次通訳。",
        "<strong>教育協力:</strong> 日本国際学校理事長と日本語学校代表者との意見交換の通訳。",
        "<strong>幼児教育プロジェクト:</strong> Academy Sharingおよびシンガポールパートナー向けの和英逐次通訳。"
      ]
    },
    {
      icon: "🌟",
      title: "その他・経験",
      items: [
        "<strong>電子部品:</strong> 4年間の正社員勤務経験。",
        "<strong>イベント・観光:</strong> 婚約式・結婚式の通訳、ハノイおよび近郊への日本人ゲスト案内。"
      ]
    }
  ]
};

app.get('/api/contacts', (req, res) => {
  res.json(projectData);
});

app.post('/api/contacts', async (req, res) => {
  // Map the new field names from script.js to what we used before or just use them directly
  // script.js sends: { full_name, email, subject, content }
  const { full_name, email, subject, content } = req.body || {};
  console.log('Received contact:', { full_name, email, subject, content });

  if (!full_name || !email || !content) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const mailOptions = {
    from: `"${full_name}" <${email}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: subject || 'New Contact from Portfolio',
    text: `Name: ${full_name}\nEmail: ${email}\n\nMessage:\n${content}`,
    html: `<p><strong>Name:</strong> ${full_name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${content.replace(/\n/g, '<br>')}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => console.log(`Mock server listening on http://localhost:${port}`));
