==========================================================
 環境攝影機全域 MOT × AMR 人流導航 — 互動技術展示
==========================================================

【內容】
  index.html                   展示首頁(由此開始)
  amr_flowfield_demo.html      Demo 01 人流流向場路徑規劃
  amr_relay_follow_demo.html   Demo 02 接力跟隨與防跟錯人
  amr_gap_threading_demo.html  Demo 03 人際間隙穿越與預測
  amr_grid_routing_demo.html   Demo 04 棋盤路網人流繞路

【使用方式(免安裝)】
  1. 保持五個 HTML 檔在同一資料夾
  2. 以瀏覽器開啟 index.html(建議 Chrome / Edge)
  3. 由首頁卡片進入各展示;各頁左上角可回首頁
  ※ 完全離線可用,不需網路、不需伺服器

【部署到網站(任選其一)】
  - 任何靜態網頁空間:整個資料夾上傳即可
  - GitHub Pages:推上 repo,Settings > Pages 指向根目錄
  - Netlify / Vercel / Cloudflare Pages:資料夾拖曳上傳
  - 內網:python3 -m http.server 8000(於此資料夾內執行)

【簡報操作提示】
  - 各展示皆有 播放/暫停/重置 與倍速切換,預設倍速已調至簡報節奏
  - 兩面板人流以相同亂數種子生成,條件完全對等,可安心回答提問
  - 模擬參數與對照組設定於各頁頁尾完整揭露

【簡報建議順序】
  首頁 Hero 切換「無/有全域身分」開關(30 秒講完核心基礎 F1)
  → Demo 01(方向)→ Demo 04(密度)→ Demo 02(身分)→ Demo 03(預測)
  時間有限時:首頁 + Demo 01 + Demo 02 即可
