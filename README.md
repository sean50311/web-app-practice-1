# My Task Manager

Web App 個人課堂實作 I：任務管理器。可以新增、完成、刪除、篩選任務，並顯示任務統計。

## 網站連結

| 版本 | 連結 |
|---|---|
| 原生 JavaScript 版（完整功能） | https://sean50311.github.io/web-app-practice-1/ |
| React 版（新增、完成、刪除） | https://sean50311.github.io/web-app-practice-1/framework/ |

## 專案架構

```
web-app-practice-1/
├── index.html            原生 JavaScript 版的頁面結構
├── css/
│   └── style.css         版面、RWD、hover 樣式（兩個版本共用）
├── js/
│   └── app.js            原生 JavaScript 版的功能
├── framework/
│   └── index.html        React 版（以 CDN 載入 React，程式寫在同一個檔案）
└── evidence/             查核點證據、Unit Test Table、AI 對話紀錄
```

## 程式碼

| 項目 | 檔案 |
|---|---|
| HTML | [index.html](index.html) |
| CSS | [css/style.css](css/style.css) |
| JavaScript | [js/app.js](js/app.js) |
| React | [framework/index.html](framework/index.html) |

## 查核點證據

所有證據都放在 [evidence/](evidence/) 資料夾。

### 第一階段：HTML 結構

| 查核點 | 證據 |
|---|---|
| 1-1 基本結構 | [完整畫面](evidence/1-1.png) |
| 1-2 語意化 HTML | [最重要的語意化 HTML 區域](evidence/最重要語意化%20html%20區域.png) |

### 第二階段：CSS 與 RWD

| 查核點 | 證據 |
|---|---|
| 2-1 基本版面 | [電腦畫面](evidence/2-2%20電腦截圖.png) |
| 2-2 RWD | [電腦版](evidence/2-2%20電腦截圖.png)、[手機版（480px 以下）](evidence/2-2%20手機截圖.png) |
| 2-3 Hover / Focus | [hover 前](evidence/2-3%20hover%20前.png)、[hover 後](evidence/2-3%20hover%20後.png) |

### 第三階段：JavaScript 功能

| 查核點 | 證據 |
|---|---|
| 3-1 新增任務 | [新增前](evidence/3-1%20新增前.png)、[新增後](evidence/3-1%20新增後.png) |
| 3-2 完成／取消完成 | [未完成](evidence/3-2%20未完成.png)、[已完成](evidence/3-2%20已完成.png) |
| 3-3 刪除任務 | [刪除前](evidence/3-3%20刪除前.png)、[刪除後](evidence/3-3%20刪除後.png) |
| 3-4 任務篩選 | [全部](evidence/3-4%20全部.png)、[未完成](evidence/3-4%20未完成.png)、[已完成](evidence/3-4%20已完成.png) |
| 3-5 統計資訊 | [操作前](evidence/3-5%20操作前.png)、[操作後](evidence/3-5%20操作後.png) |

### 第四階段：JavaScript 程式驗證

| 查核點 | 證據 |
|---|---|
| 新增任務相關程式碼 | [程式碼截圖](evidence/第四階段截圖.png) |

### 第五階段：React

| 查核點 | 證據 |
|---|---|
| 5-1 框架啟動 | [React 執行畫面](evidence/5-1%20React%20執行畫面.png) |
| 5-2 資料與畫面連動 | [新增前](evidence/5-2%20新增前.png)、[新增後](evidence/5-2%20新增後.png) |
| 5-3 完成任務 | [未完成](evidence/5-3%20未完成.png)、[完成後](evidence/5-3%20完成後.png) |
| 5-4 刪除任務 | [刪除前](evidence/5-4%20刪除前.png)、[刪除後](evidence/5-4%20刪除後.png) |

## Unit Test Table

[evidence/Unit Test Table.xlsx](evidence/Unit%20Test%20Table.xlsx)

- 第一個工作表：TC01 ~ TC10 的測試結果
- 第二個工作表：測試案例的證據截圖

## AI 對話紀錄

[evidence/AI 對話紀錄.pdf](evidence/AI%20對話紀錄.pdf)
