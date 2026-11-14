# 名片設計工坊

輸入資料、選台灣風格，產生可送印刷廠的正反面名片：含 3 mm 出血、裁切框（TrimBox）、600 dpi 點陣 PDF／PNG，以及文字轉外框的向量 CMYK PDF。資料只在使用者的瀏覽器內處理，不會上傳。

## 放上 GitHub Pages

1. 在 GitHub 建立新的儲存庫（例如 `card-studio`），設為 Public。
2. 把本資料夾內**所有檔案**（含 `.nojekyll`）上傳到儲存庫根目錄。網頁介面可直接拖曳上傳；單檔不超過 25 MB 即可（本專案最大約 5.7 MB）。
3. 到 Settings → Pages → Source 選「Deploy from a branch」，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 約 1–2 分鐘後，網址會是 `https://<你的帳號>.github.io/card-studio/`。

## 可安裝的網頁 App（PWA）

用 https 開啟後：
- 手機：瀏覽器選單 →「加到主畫面」。
- 電腦 Chrome／Edge：網址列右側的安裝圖示。

第一次開啟後即可離線使用；向量 PDF 用到的字型會在第一次輸出時下載並保存在本機。

## 檔案說明

| 檔案 | 用途 |
|---|---|
| index.html | 主程式（單一檔案） |
| f_*.js | 向量 PDF 用的字型子集（輸出時才載入） |
| opentype.min.js | 字型外框引擎 |
| qrcode.js | QR Code 產生器 |
| sw.js、manifest.webmanifest、icon-*.png | 離線與安裝用 |
| LICENSES.md | 第三方授權 |

## 注意

- 預覽用的螢幕字型由 Google Fonts 載入；離線時會改用已快取的版本。
- 向量 PDF 的 CMYK 為一般換算，非印刷廠色彩描述檔，正式印刷前建議打樣。
