==========================================================
 環境攝影機全域 MOT × AMR 人流導航 — 互動技術展示
==========================================================

【內容】(依首頁分組)
  index.html                     展示首頁(由此開始)

  — 任務效能:把事做好 —
  amr_flowfield_demo.html        Demo 01 人流流向場路徑規劃(解凍結)
  amr_relay_follow_demo.html     Demo 02 接力跟隨與防跟錯人(解跟錯)
  amr_gap_threading_demo.html    Demo 03 人際間隙穿越與預測(解空等)
  amr_grid_routing_demo.html     Demo 04 棋盤路網人流繞路(解凍結)
  amr_surge_demo.html            Demo 05 人潮洩洪預測(解空等)

  — 社會語意:把人當人 —
  amr_queue_demo.html            Demo 06 排隊識別:不插隊的機器人(解插隊)
  amr_group_demo.html            Demo 07 群體識別:哪些縫不該鑽(解拆散)
  amr_store_inventory_demo.html  Demo 08 超商點貨錯峰作業(解打擾)

【使用方式(免安裝)】
  1. 保持九個 HTML 檔在同一資料夾
  2. 以瀏覽器開啟 index.html(建議 Chrome / Edge)
  3. 由首頁卡片進入各展示;各頁左上角可回首頁
  ※ 完全離線可用,不需網路、不需伺服器

【部署到網站(任選其一)】
  - 任何靜態網頁空間:整個資料夾上傳即可
  - GitHub Pages:推上 repo,Settings > Pages 指向根目錄
  - Netlify / Vercel / Cloudflare Pages:資料夾拖曳上傳
  - 內網:python3 -m http.server 8000(於此資料夾內執行)

【簡報操作提示】
  - 各展示皆有 播放/暫停/重置 與倍速切換
  - 鍵盤快捷鍵:空白鍵 = 播放/暫停,R = 重置(簡報時免用滑鼠)
  - 錄影:各展示頁「⏺ 錄影」→ 選「Chrome/Edge 分頁 → 此分頁」
    → 播放展示 → 按「⏹ 停止並下載」,自動存成 .webm 影片
    (需 Chrome/Edge;.webm 可直接播放;若要放進 PowerPoint,
     建議轉 mp4:ffmpeg -i in.webm -c:v libx264 -crf 18 out.mp4)
  - 兩面板人流以相同亂數種子生成,條件完全對等,可安心回答提問
  - 模擬參數與對照組設定於各頁頁尾完整揭露
  - 首頁痛點卡右下角「→ DEMO XX」可直接跳到對應展示卡

【簡報建議順序】
  首頁兩個核心對比(上帝視角/全域 ID,各 30 秒)
  → 痛點兩排(任務失效 × 社會失格)
  → Demo 01(方向)→ Demo 05(洩洪)→ Demo 06(排隊)
  → 其餘依提問展開;Demo 08(超商)適合作商業收尾
  Demo 03 與 07 成對:會鑽縫是技術,知道哪些縫不該鑽是智慧
  Demo 03 與 05 成對:同一套「窗口 vs 抵達時間」邏輯,
                      尺度從兩人之間放大到整個人浪
