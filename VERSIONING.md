# 版號與還原

目前版號在 `VERSION`，每個正式版本都有同名 Git 標籤，例如 `v1.0.0`。
更新紀錄在 `CHANGELOG.md`。標籤固定指向該次發版的完整專案快照，不重新指向其他提交。

## 編號方式

- `v1.0.1`：小修正、樣式調整。
- `v1.1.0`：新增功能。
- `v2.0.0`：大幅改版或不相容的調整。

日常資料自動更新仍可建立一般 Git 提交；只有建立新版標籤的提交才是新的編號版本。
因此同一版號之後的資料更新不會自動包含在該標籤內。要保留某一刻的完整資料，也應建立新版。

## 建立下一版

先確認修改，再明確將本次要發版的檔案加入暫存區：

```powershell
git status --short
git add -- path/to/changed-file.html
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\release.ps1 -Version 1.0.1 -Summary "Adjust calendar layout"
```

指令會更新 `VERSION` 與 `CHANGELOG.md`、提交已暫存的修改，再建立附註標籤 `v1.0.1`。
若有未暫存或未追蹤的檔案、版本未遞增、或標籤已存在，指令會停止。
可加 `-WhatIf` 預覽；它不會寫檔、提交或建立標籤。

發版指令不會自動上傳。確認要發布 GitHub Pages 時，再推送目前分支與該版標籤：

```powershell
git push origin github_pages
git push origin v1.0.1
```

## 查看與恢復指定版本

```powershell
git tag --list 'v*' --sort=-version:refname
git show v1.0.0:VERSION
git log -1 --oneline v1.0.0
```

之後直接說「恢復到 v1.0.0」即可。恢復前會先保留目前版本，再由指定標籤建立還原分支，確認後將還原結果提交回發布分支；保留歷史，不強制覆寫遠端。

要先查看舊版，可在工作目錄乾淨時執行：

```powershell
git switch -c review-v1.0.0 v1.0.0
```

切換至舊版只影響本機；GitHub Pages 要等發布分支推送後才會更新。
本機標籤也需推送至遠端，才有遠端備份。
