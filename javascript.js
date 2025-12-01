    const email = 'thanhpham0907@hatonet.com';
    document.getElementById('mailtoLink').setAttribute('href', 'mailto:' + email);
    document.getElementById('emailSide').textContent = email;
    document.getElementById('emailText').textContent = email;
    document.getElementById('year').textContent = new Date().getFullYear();

    function copyEmail(){
      navigator.clipboard?.writeText(email).then(()=> {
        alert('Copied: ' + email);
      }).catch(()=> {
        prompt('Copy email:', email);
      });
    }

    function handleSend(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const from = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Yêu cầu phiên dịch';
      const message = document.getElementById('message').value.trim();
      if(!name || !from || !message){
        alert('Please fill in Name, Email and Message.');
        return;
      }
      const body = encodeURIComponent(
        'Tên: ' + name + '\\n' +
        'Email: ' + from + '\\n' +
        '---\\n' + message
      );
      window.location.href = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + body;
    }

    function toggleTheme(){
      const root = document.documentElement;
      if(root.style.getPropertyValue('--bg') === ''){
        root.style.setProperty('--bg','#f6f7fb');
        root.style.setProperty('--card','#ffffff');
        root.style.setProperty('--muted','#555');
        root.style.color = '#111';
      } else {
        root.style.removeProperty('--bg');
        root.style.removeProperty('--card');
        root.style.removeProperty('--muted');
        root.style.color = '#e6eef6';
      }
      document.body.style.transition='filter .3s';
      document.body.style.filter='invert(.05)';
      setTimeout(()=> document.body.style.filter='none',300);
    }

    window.addEventListener('load', ()=> {
      document.querySelectorAll('.fade-up').forEach((el,i)=>{
        el.style.animationDelay = (i*80 + 80) + 'ms';
      });
    });

    const resources = {
      vi: {
        site_name: "Thành Phạm",
        tagline: "Phiên dịch • Biên dịch (Việt ↔ Trung) — Hội nghị • Thương mại • Livestream • Hợp đồng",
        exp: "Kinh nghiệm: 6+ năm",
        avail: "Sẵn sàng: Di chuyển / Làm gấp",
        style: "Phong cách: Chính xác — Tự nhiên — Bảo mật",
        copy: "Copy",
        about_title: "Giới thiệu",
        about_desc: "Tôi là <strong>Thanh Pham</strong>, phiên dịch viên chuyên nghiệp chuyên xử lý các dự án hội nghị, đàm phán thương mại, livestream và biên dịch tài liệu pháp lý/ kỹ thuật. Tôi cung cấp dịch vụ chính xác, giữ nguyên sắc thái văn bản gốc và đảm bảo tính bảo mật cho khách hàng.",
        service_title: "Dịch vụ chính",
        svc_1_title: "Phiên dịch trực tiếp / online",
        svc_1_desc: "Hội thảo, cuộc họp, đàm phán, dẫn đoàn, hỗ trợ giao dịch thương mại.",
        svc_2_title: "Biên dịch tài liệu",
        svc_2_desc: "Hợp đồng, báo cáo kỹ thuật, tài liệu marketing, prospectus.",
        svc_3_title: "Livestream & Subtitle",
        svc_3_desc: "Phiên dịch trực tiếp cho livestream, dịch phụ đề video/ quảng cáo.",
        skill_title: "Kỹ năng nổi bật",
        sk_1: "Phiên dịch hội nghị",
        sk_2: "Dịch thương mại & hợp đồng",
        sk_3: "Livestream / Simultaneous",
        sk_4: "Dịch kỹ thuật",
        sk_5: "Nắm bắt sắc thái văn hóa",
        sk_6: "Bảo mật & NDA",
        project_title: "Dự án tiêu biểu",
        pj_1_title: "Phiên dịch đàm phán thương mại — Công ty A",
        pj_1_desc: "Hỗ trợ đàm phán trực tiếp, góp phần giúp hoàn tất hợp đồng trị giá 250k USD.",
        pj_2_title: "Biên dịch hợp đồng kỹ thuật — Công ty B",
        pj_2_desc: "Biên dịch hợp đồng mua bán thiết bị chuyên ngành, đảm bảo tính pháp lý và chính xác thuật ngữ.",
        pj_3_title: "Livestream bán hàng — Kênh C",
        pj_3_desc: "Phiên dịch trực tiếp, điều phối diễn giả, tăng chuyển đổi khách hàng.",
        testi_title: "Phản hồi khách hàng",
        testi_content: "“Dịch rất sát nghĩa, hỗ trợ chuyên nghiệp trong suốt quá trình đàm phán.” — <strong>Khách hàng X</strong>",
        price_title: "Bảng giá tham khảo",
        price_1_label: "Phiên dịch trực tiếp:",
        price_1_val: "500.000 - 1.500.000 VNĐ / giờ (tùy nội dung & địa điểm)",
        price_2_label: "Phiên dịch nguyên ngày:",
        price_2_val: "4.000.000 - 12.000.000 VNĐ / ngày",
        price_3_label: "Biên dịch tài liệu:",
        price_3_val: "50.000 - 150.000 VNĐ / trang (tùy chuyên ngành)",
        price_note: "Giá có thể điều chỉnh theo mức độ chuyên môn, thời gian gấp và yêu cầu bảo mật.",
        contact_title: "Liên hệ",
        contact_desc: "Gửi yêu cầu dự án hoặc đặt lịch phiên dịch — tôi sẽ phản hồi nhanh chóng.",
        ph_name: "Họ và tên *",
        ph_email: "Email của bạn *",
        ph_subject: "Tiêu đề",
        ph_message: "Nội dung (mô tả ngắn dự án, ngôn ngữ, thời gian, địa điểm) *",
        btn_send: "Gửi liên hệ",
        or_email: "Hoặc email trực tiếp:",
        info_title: "Thông tin nhanh",
        info_name: "Họ tên",
        info_loc: "Khu vực",
        info_loc_val: "Ho Chi Minh / Toàn quốc",
        btn_fb: "Xem hồ sơ Facebook",
        btn_copy: "Sao chép email",
        btn_mail: "Gửi email",
        lang_work: "Ngôn ngữ làm việc:",
        lang_1: "Tiếng Việt (Bản ngữ)",
        lang_2: "Tiếng Trung (Thành thạo)",
        lang_3: "Tiếng Anh (Giao tiếp chuyên ngành)",
        promise: "Cam kết:",
        promise_desc: "Bảo mật thông tin — Chuẩn xác thuật ngữ — Trách nhiệm với tiến độ",
        footer_role: "Phiên dịch viên"
      },
      en: {
        site_name: "Thanh Pham",
        tagline: "Interpreter • Translator (VN ↔ CN) — Conference • Business • Livestream • Contracts",
        exp: "Exp: 6+ Years",
        avail: "Avail: Travel / Urgent Requests",
        style: "Style: Precise — Natural — Confidential",
        copy: "Copy",
        about_title: "About Me",
        about_desc: "I am <strong>Thanh Pham</strong>, a professional interpreter specializing in conferences, business negotiations, livestreams, and legal/technical translation. I provide accurate services that preserve nuances and ensure client confidentiality.",
        service_title: "Services",
        svc_1_title: "Interpreting (On-site / Online)",
        svc_1_desc: "Seminars, meetings, negotiations, tour guiding, trade support.",
        svc_2_title: "Document Translation",
        svc_2_desc: "Contracts, technical reports, marketing materials, prospectuses.",
        svc_3_title: "Livestream & Subtitling",
        svc_3_desc: "Live interpreting for streams, video subtitles/ads.",
        skill_title: "Key Skills",
        sk_1: "Conference Interpreting",
        sk_2: "Business & Contract Translation",
        sk_3: "Livestream / Simultaneous",
        sk_4: "Technical Translation",
        sk_5: "Cultural Nuance Awareness",
        sk_6: "Confidentiality & NDAs",
        project_title: "Featured Projects",
        pj_1_title: "Trade Negotiation — Company A",
        pj_1_desc: "Provided live interpretation, assisting in closing a $250k contract.",
        pj_2_title: "Technical Contract — Company B",
        pj_2_desc: "Translated equipment purchase agreements ensuring legal validity and terminological accuracy.",
        pj_3_title: "Sales Livestream — Channel C",
        pj_3_desc: "Live interpretation for hosts, improving customer conversion rates.",
        testi_title: "Testimonials",
        testi_content: "“Very accurate translation, professional support throughout the negotiation.” — <strong>Client X</strong>",
        price_title: "Reference Pricing",
        price_1_label: "Interpreting:",
        price_1_val: "500k - 1.5M VND / hour (depends on content/location)",
        price_2_label: "Daily Rate:",
        price_2_val: "4M - 12M VND / day",
        price_3_label: "Document Translation:",
        price_3_val: "50k - 150k VND / page (depends on topic)",
        price_note: "Rates may vary based on complexity, urgency, and confidentiality requirements.",
        contact_title: "Contact",
        contact_desc: "Send a project request or booking — I will respond promptly.",
        ph_name: "Full Name *",
        ph_email: "Your Email *",
        ph_subject: "Subject",
        ph_message: "Message (Brief project desc, language, time, location) *",
        btn_send: "Send Message",
        or_email: "Or email directly:",
        info_title: "Quick Info",
        info_name: "Name",
        info_loc: "Location",
        info_loc_val: "Ho Chi Minh / Nationwide",
        btn_fb: "View Facebook Profile",
        btn_copy: "Copy Email",
        btn_mail: "Send Email",
        lang_work: "Working Languages:",
        lang_1: "Vietnamese (Native)",
        lang_2: "Chinese (Proficient)",
        lang_3: "English (Professional Working)",
        promise: "Commitment:",
        promise_desc: "Confidentiality — Accuracy — Accountability",
        footer_role: "Interpreter"
      },
      ja: {
        site_name: "タン・ファム",
        tagline: "通訳 • 翻訳 (ベトナム語 ↔ 中国語) — 会議 • 商談 • ライブ配信 • 契約書",
        exp: "経験: 6年以上",
        avail: "対応: 出張可 / お急ぎ対応可",
        style: "スタイル: 正確 — 自然 — 機密保持",
        copy: "コピー",
        about_title: "自己紹介",
        about_desc: "プロの通訳者、<strong>Thanh Pham (タン・ファム)</strong>です。会議、商談、ライブ配信、法的/技術文書の翻訳を専門としています。原文のニュアンスを保ち、正確かつ機密性の高いサービスを提供します。",
        service_title: "主なサービス",
        svc_1_title: "通訳 (対面 / オンライン)",
        svc_1_desc: "セミナー、会議、商談、アテンド、貿易サポート。",
        svc_2_title: "文書翻訳",
        svc_2_desc: "契約書、技術レポート、マーケティング資料、目論見書。",
        svc_3_title: "ライブ配信 & 字幕",
        svc_3_desc: "ライブ配信のリアルタイム通訳、動画/広告の字幕翻訳。",
        skill_title: "主なスキル",
        sk_1: "会議通訳",
        sk_2: "ビジネス & 契約翻訳",
        sk_3: "ライブ配信 / 同時通訳",
        sk_4: "技術翻訳",
        sk_5: "文化的なニュアンスの理解",
        sk_6: "機密保持 (NDA)",
        project_title: "主な実績",
        pj_1_title: "商談通訳 — A社",
        pj_1_desc: "直接交渉をサポートし、25万ドルの契約締結に貢献。",
        pj_2_title: "技術契約書の翻訳 — B社",
        pj_2_desc: "専門機器の売買契約書を翻訳し、法的有効性と用語の正確性を確保。",
        pj_3_title: "販売ライブ配信 — チャンネルC",
        pj_3_desc: "配信者向けのリアルタイム通訳を行い、顧客転換率を向上。",
        testi_title: "お客様の声",
        testi_content: "「非常に的確な翻訳で、交渉中も専門的なサポートをしてくれました。」 — <strong>クライアント X</strong>",
        price_title: "参考価格",
        price_1_label: "通訳:",
        price_1_val: "500,000 - 1,500,000 VND / 時間 (内容・場所による)",
        price_2_label: "終日対応:",
        price_2_val: "4,000,000 - 12,000,000 VND / 日",
        price_3_label: "文書翻訳:",
        price_3_val: "50,000 - 150,000 VND / ページ (分野による)",
        price_note: "専門性、緊急度、機密保持の要件により価格は調整可能です。",
        contact_title: "お問い合わせ",
        contact_desc: "プロジェクトのご依頼や予約はこちらから。迅速に返信いたします。",
        ph_name: "お名前 *",
        ph_email: "メールアドレス *",
        ph_subject: "件名",
        ph_message: "内容 (プロジェクト概要、言語、日時、場所など) *",
        btn_send: "送信する",
        or_email: "または直接メール:",
        info_title: "基本情報",
        info_name: "氏名",
        info_loc: "拠点",
        info_loc_val: "ホーチミン市 / 全国対応",
        btn_fb: "Facebook プロフィール",
        btn_copy: "メールをコピー",
        btn_mail: "メールを送る",
        lang_work: "対応言語:",
        lang_1: "ベトナム語 (母国語)",
        lang_2: "中国語 (流暢)",
        lang_3: "英語 (業務レベル)",
        promise: "お約束:",
        promise_desc: "情報保護 — 正確性 — 責任感",
        footer_role: "通訳者"
      }
    };

    function changeLanguage(lang) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(resources[lang] && resources[lang][key]) {
           el.innerHTML = resources[lang][key];
        }
      });
      const inputs = document.querySelectorAll('[data-i18n-ph]');
      inputs.forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if(resources[lang] && resources[lang][key]) {
          el.placeholder = resources[lang][key];
        }
      });
      document.documentElement.lang = lang;
    }
 