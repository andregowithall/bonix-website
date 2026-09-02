# BONIX 项目说明

## 项目概述
BONIX 是一家中国个护 OEM/ODM 制造中间商，定位为海外客户的制造合作伙伴。
目标市场：美国、英国、澳大利亚的独立个护品牌创始人（1-20人规模）。
业务伙伴：Andre + Eric，工厂/研发在广州，办公室在成都。

## 网站基本信息
- 线上地址：https://bonixmfg.com
- 托管：GitHub Pages（main branch）
- DNS：Cloudflare
- HTTPS：已开启（Enforce HTTPS 已勾选）

## 本地文件
- 项目文件夹：~/Desktop/bonix/
- 主文件：index.html（主网站，含所有 HTML/CSS/JS）
- 其他文件：privacy-policy.html、sitemap.xml、CNAME
- process.html（合作流程子页面：三种服务模式简介 + 完整八步合作流程，2026-09-02 新增）
- 图片文件：hero-fallback.jpeg、prod-visual.jpeg、stage1-main.jpeg、stage2-img1~4.jpeg、stage3-main.jpeg、cert-badges.jpeg、cert-doc-gmpc.jpeg、cert-doc-iso.jpeg、ingredients.png

## GitHub
- 仓库：https://github.com/andregowithall/bonix-website
- 分支：main
- 推送流程：
  1. git add .
  2. git commit -m "描述"
  3. git pull --rebase origin main（如遇冲突先执行）
  4. git push

## 设计规范
- 字体：Cormorant Garamond（标题）+ IBM Plex Sans（正文）
- 配色：off-white 背景 + 深森林绿 #2f5d4f + 淡金色点缀
- 风格：极简、高端、个护 ODM 定位
- 语言：双语切换（EN / 中文）

## 第三方服务
- 表单：Formspree，endpoint = https://formspree.io/f/xojzvpzy
- 流量统计：Google Analytics 4，衡量 ID = G-XERNC4ZQ1J
- WhatsApp / 电话：+86 139 2035 1502（wa.me 链接：8613920351502）

## 邮件基础设施
- Google Workspace：andre@bonixmfg.com / eric@bonixmfg.com
- DKIM 认证：已配置（Cloudflare DNS TXT 记录）
- 冷邮件工具：Apollo.io（prospecting）+ Instantly.ai（计划使用，序列发送）
- Apollo 筛选：1-20人、Founder/CEO、美英澳、个护行业

## 网站已完成改动
- Hero 区域新增第三个按钮 "Send Us a Message"，点击跳转到 #inquiry-form
- 三个按钮样式统一（btn-accent）
- WhatsApp 链接号码已修正为 8613920351502

### 2026-09-02 首页/facility.html/process.html 结构重组
- **首页板块精简**：删除 Departments（迁移至 facility.html）、删除 Trusted Worldwide（客户评价+地区标签网格整体移除，不作为B2B网站的重点）、删除 Our Model（迁移至新建的 process.html）；Manufacturing Capabilities 板块新增 Facility & Scale 数据条（Employees/Equipment Units/Cleanroom/Production Lines/Daily Output，悬停展开详情，与 Hero 区域数据部分重复但保留，作为强化记忆）；How We Work 板块文案精简，标题从"Flexible Manufacturing Solutions"改为"Three Paths to Production"，新增"View Full Process →"按钮跳转 process.html
- **facility.html 重组为软硬件两板块**：原 Facility & Scale 数据条移至首页；新增 Team & Capability 浅色卡片板块（承接原首页 Departments 内容，QC 相关内容按"团队/流程角度"表述，与 Equipment & Quality 板块的"设备/检测角度"区分，避免重复）；Equipment & Quality 标题从"Our Equipment & Quality"改为"A Full-Capability Manufacturing Line"，与上方 Team & Capability 标题呼应
- **新建 process.html**：承接原首页 Our Model 八步流程内容，排版从纵向列表改为 4×2 紧凑卡片网格（悬停展开步骤详情），避免过长滚动；导航栏 Process 项从锚点跳转改为独立子页直链
- **全站导航栏统一**：五个页面（index/facility/certifications/products/startup-program）导航栏去掉 Services 项（首页 How We Work 板块的跳转按钮已替代其功能）；Process 链接统一改为 process.html 直链（原为 index.html#process 锚点跳转）；页脚 "Our Process" 链接同步更新
- **Bug 修复**：修复 index.html 中 #certifications section 缺失闭合标签的历史遗留问题（首页改版之前就存在，与本次改动无关，顺手修复）
- 已知遗留问题：facility.html 的 Equipment & Quality 板块 8 张设备卡片存在图文错位（图片文件名与图注文字系统性错位一位），本次未处理，留待下次单独修复

## 冷邮件策略
- 主要获客渠道：冷邮件
- 目标客户：美英澳独立个护品牌创始人，1-20人规模
- 跟进节奏：Day 1 / Day 5 / Day 10
- 邮件 CTA：低摩擦，"Happy to share more details if this sounds relevant to you"
- 未来扩展：Apollo 付费导出 + Claude API + Instantly.ai 自动化序列

## 已知注意事项
- JS 里避免双逗号 `,,` 语法错误，会导致内容 opacity:0 消失
- 修改后建议用 `node --check index.html` 验证语法
- 用 Python 脚本写入文件比直接终端编辑更安全可靠
- Formspree 免费版每月限 50 条提交，超出后静默失败
- 导航栏结构（六个页面统一）：Manufacturing Capabilities / Certifications / Products / Process / Contact（2026-09-02 起移除 Services 项）

## 待办事项
- [ ] 验证 GMPC 和 ISO 22716 认证是否当前有效
- [ ] 配置 Instantly.ai 邮件 Day 1/5/10 序列
- [x] 优化 Hero 图片（从 base64 改为独立图片文件）
- [ ] 补充 MOQ 信息到网站

## 修改方式偏好
- 优先使用 macOS Claude Code 进行文件修改
- Claude AI 提供终端指令，Andre 在 Claude Code 中输入执行
- 适用场景：sed 替换、文件编辑、git 操作等
