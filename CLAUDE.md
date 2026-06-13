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
- WhatsApp / 电话：+86 139 2035 1502

## 邮件基础设施
- Google Workspace：andre@bonixmfg.com / eric@bonixmfg.com
- DKIM 认证：已配置（Cloudflare DNS TXT 记录）
- 冷邮件工具：Apollo.io（prospecting）+ Instantly.ai（序列发送）
- Apollo 筛选：1-20人、Founder/CEO、美英澳、个护行业

## 已知注意事项
- JS 里避免双逗号 `,,` 语法错误，会导致内容 opacity:0 消失
- 修改后建议用 `node --check index.html` 验证语法
- 用 Python 脚本写入文件比直接终端编辑更安全可靠
- Formspree 免费版每月限 50 条提交，超出后静默失败
- Hero 图片为 base64 内嵌，文件体积较大

## 待办事项
- [ ] 验证 GMPC 和 ISO 22716 认证是否当前有效
- [ ] 配置 Instantly.ai 邮件 Day 1/5/10 序列
- [ ] 考虑优化 Hero 图片（从 base64 改为独立图片文件）
