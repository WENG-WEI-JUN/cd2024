var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"41123221-w12","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,將分配到的圖使用錄影功能紀錄繪製過程. NX繪圖 我分配到的是第三個零件 繪製過程 零件圖檔 長方體尺寸 厚度尺寸 挖孔尺寸及深度 完成圖","tags":"w12","url":"./2120240509.html"},{"title":"41123221-w11","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,統整心得. 利用上週加入的全班倉儲,編寫前10週之統整心得 在一個共同編輯的環境中,每個人都有權限對內容進行修改。然而,如果每個人都同時提交修改,可能會導致混亂和錯誤的情況發生,因為我們的修改可能會互相衝突。為了避免這種情況,我們可以使用分支的方法來進行修改。這意味著每個人在進行修改之前都會從主分支上創建一個獨立的分支。在完成個人或小組的修改後,我們可以將這些修改合併到主分支中。這樣做可以確保我們的修改不會互相干擾,同時也能保證主分支上的內容始終保持正確和完整.","tags":"w11","url":"./2120240502.html"},{"title":"41123221-w10","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,協同產品設計實習第十週實習操作,透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. 任務一 根據老師所給的 2b.txt 裡的[\"學號\", \"Github 帳號\", \"組別\"], 以下是利用 Python 寫的初步資料數列. from browser import window, ajax def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 並列出-學員倉儲連結/學員網站連結/2b 分組倉儲連結 template: https://github.com/mdecd2024/2b-midag組別 下列程式碼是加上了生成 HTML 元素的程式碼，以及學員倉庫連結和網站連結的模板： from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) # 生成 HTML 元素 generate_html(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 生成 HTML 元素 def generate_html(data): brython_div = document[\"brython_div1\"] course_title = \"cd2024\" for student_id, github_username, group in data: # 如果GitHub用戶名為空，將其設置為\"000\" github_username = github_username if github_username else \"000\" # 創建網址和倉庫的鏈接 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 生成HTML元素並插入到div中 brython_div <= html.A(student_id, href=site_url) + \" | \" + \\ html.A(\"GitHub Repo\", href=repo_url) + \" | \" + \\ html.A(\"Group Repo\", href=group_repo_url) + html.BR() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 這段程式碼會從 CSV 檔案中讀取學員的基本資料（學號、GitHub 帳號、組別），然後使用 for 迴圈生成 HTML 元素，並將這些元素插入到網頁中。你可以根據需要修改 generate_html 函式中的 HTML 元素結構，以符合你的需求。 任務二 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 探討在實施自動控制理論以穩定動態系統時所遇到的限制。它關注於球平衡平台的結構和理論研究，並通過實際裝置來展示自動控制理論在穩定動態系統中的局限性。為了進行比較，需要設計一個滿足系統需求的令人滿意的控制器。在設備和控制方面，引入了比例積分導數控制器來平衡平台上的球體系統。此外，還允許分析以確定穩定自然不穩定或半穩定系統的限制。最後，建立了球體平衡平台的理論模型，並與實際搭建的平台進行了比較，分析了理論與實際結果之間的差異，並探討了控制理論與系統實施所面臨的挑戰。 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 在一個FPGA晶片上，開發了兩個並行的PID控制器，用於獨立控制一個物件的兩個參數。確保了PID控制器對控制物件的輪廓計算進行並行處理，調節器的輸出已經被歸一化。透過自然類比，提高了在平台上調節球位置的精度。這種設計的控制器可用於即時控制具有許多受控參數的高速物體。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 本研究詳細設計並比較了三種控制結構，以實現自動穩定球在平板上的位置和球的軌跡跟蹤。這三種結構分別是PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過了設計和實際比較。這些結構共同的特點是它們的控制器參數計算方法。此外，本文還包括了通過牛頓方法推導的平板上球的數學模型和直流電機位置迴路控制。 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 利用微控制器和相關控制算法，開發了一個球平衡系統，以保持球在橫樑上的平衡，並透過即時感測反饋來調整橫樑的角度。製作了三個原型並進行了比較，特別是在合理性和成本方面。整個系統設計包括一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，這樣的設計使得系統易於實現。通過微控制器程式設計來理解和實現控制算法，對於對MATLAB了解不多的學生也是適用的。開發了介面程式，以在MATLAB中繪製即時位置曲線。這個簡化的系統不僅作為理論知識和實踐技能之間的橋樑，同時也適用於更複雜的系統。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 平衡問題一直是持續的研究挑戰，在許多領域都有應用，從教育到交通。二自由度球平衡實驗室試驗台是了解控制系統的重要設備之一。本文主要介紹了用於板上平衡球的機械設計。通過電阻式觸摸屏獲取球體位置數據，並使用步進電機和位置傳感器來控制平台的傾斜角度。設計基於AVR微控制器的雙環下位控制系統，利用PID控制器來維持球體的平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 利用QUARC軟體，我們設計並實現了對二維平台上球體位置的控制系統。我們設計了PD和PID控制器，並研究了設定點權重和積分器抗飽和等控制技術。透過攝像頭讀取球體位置，我們進行了校準和轉換，以確保控制系統的準確性和穩定性。 任務三","tags":"w10","url":"./2120240425.html"},{"title":"41123221-w9","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引","tags":"w9","url":"./2120240418.html"},{"title":"41123221-w8","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,錄製期中影片 期中影片 錄製 期中影片 ,介紹至目前的進度.","tags":"w8","url":"./2120240411.html"},{"title":"41123221-w7","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,清明節放假 w1~w6統整 將w1~w6的內容統整,並檢查哪裡有錯誤的地方.","tags":"w7","url":"./2120240404.html"},{"title":"41123221-w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式. ODOO PLM 論文中英並列任務 每個組員都需要在其個人的 cd2024 倉儲中以 LaTeX 格式完成下列文章的英文與中文翻譯,最後組員需要在分組網站的 Release 或 downloads 區域完成製作 2b-midbgx_report.pdf 若您想在本地環境中使用可攜式程式編譯分組 LaTeX 報告，請下載以下兩個檔案： 1. miktex-portable.7z （大小約 167MB，解壓縮後約 1GB，需要密碼） 2.參考資料： latex_images_github.7z （需要密碼） 這兩個檔案將提供您在本地編譯 LaTeX 文件所需的環境和資源。 CoppeliaSim 檔案格式 請下載 copsim_midterm_cube2_xml.7z 檔案。 1.CoppeliaSim 目前提供二進位與 XML 格式的場景檔案。XML 格式的場景檔案支援單一檔案或多個模型與影像檔案的儲存。 2.從 4.5.1 版本開始，設定資料不再存儲在套件目錄中，而是存放在操作系統的 AppData/Roaming 目錄中。 3.在 4.5.1 版本時，儲存為多 XML 檔案格式時，無法帶出場景中的 png 圖檔，此一問題在 4.6.0 版本之後才得到修正。 4.目前僅修改至 4.5.1 版本的 CoppeliaSim 支援 IPv4 與 IPv6 網際場景模擬。 5.XML 格式的檔案具有廣泛的應用，協同產品設計過程可能需要使用程式方法來處理從零組件與模擬場景互相轉換取得的 XML 格式檔案。 ODOO, NX, Sourcetree, Github and Replit 建立協同產品開發環境的配置需要以下步驟： 1.下載 Siemens NX1872 軟體。cd2024 學生可以選擇在電腦上安裝 NX1872 或者從隨身碟中運行 NX1872。 2.下載 Sourcetree_portable.7z 。這需要密碼才能解壓縮。 3.下載其他工具，包括 CoppeliaSim、SciTE、Portablegit、Putty、Zoomit、Python、Solvespace和Process Explorer等。 4.下載 Solvespace_model_2d_for_cd2024_w6.7z 。 配置重點在於將 NX、Sourcetree 和 CoppeliaSim 的設定檔案與管理分組倉儲的權限存儲至可攜系統。並且需要從可攜系統啟動後的命令列中啟動這些應用程式。","tags":"w6","url":"./2120240328.html"},{"title":"41123221-w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,教學內容為先前影片整理、分組網誌的統整. 影片整理 各組需要對教學影片進行整理並進行自我評估。具體步驟如下： 1.將字幕嵌入到影片上,並上傳到組別網站的平台上。 2.從影片字幕中整理出逐字稿,並以 .txt 格式提供連結，放置在影片下方。 3.在各嵌入的教學影片下方,以摘要方式說明該影片的教學重點。 4.進行自我評估,對教學影片的內容、呈現方式以及對觀眾的吸引力進行評估,並提出改進意見和建議。 如何統整組員子模組中的協同設計網誌 每位組員每週撰寫的協同設計網誌文章都會存放在個別的 cd2024 倉儲的 markdown 目錄中。只要修改分組倉儲中的 pelicanconf.py 檔案,使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數,指定網誌統整目錄,就可以將所有組員在子模組中編寫的協同網誌納入分組倉儲中. 具體的設定操作是透過 pelicanconf.py 中的程式碼段,將子模組中 markdown 目錄中的 .md 檔案動態複製到分組倉儲中的 combined_directory,同時避開分組倉儲與組員子模組倉儲中 pages 目錄下的 .md 檔案。接著進行網誌轉檔,並將產生的網誌超文件存放到所設定的 blog 目錄中。完成設定後,執行網誌轉檔指令 pelican -s local_publishconf.py,利用 local_publishconf.py 的設定進行轉檔,同時將之前 pelicanconf.py 的設定也導入執行. 在這個過程中,每位組員必須在個別網誌 .md 檔案名稱前加上一串獨一無二的網誌 Slug 字串,例如：\"學號_\"，以避免檔案名稱衝突。此外,組員的 Category 欄位使用學號作為標示。這樣一來,在統整轉檔時,就不會發生相同網誌文章檔案名稱衝突的錯誤,而且可以從各分組網誌的 Categories 中找到每位組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 老師提供了一個 NX 套件的目錄檔案，其中包含了 NX1872 目錄。如果將這個 NX1872 目錄存入隨身碟中，可以使用下面的 start_USB_nx1872.bat 檔案來啟動 NX 軟體.(電腦輔助設計室中 C: 磁碟槽安裝了 NX1872, D: 磁碟槽則配置了 NX2206 與 NX12，需要確保在啟動 NX 軟體時選擇正確的目錄和版本)","tags":"w5","url":"./2120240321.html"},{"title":"41123221-w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,在協同設計流程中,每個分組都需要明確定義任務需求和分工時序。隨著流程的進行,分組倉儲和網站的修改變得越來越複雜。為了讓各組員更清楚地看到倉儲的改版歷程以及本週的分組作業，導入 SourceTree 可以幫助團隊成員更輕鬆地管理和追蹤倉儲的修改,並更有效地協作. 分組任務 各組需要對教學影片進行整理並自我評估。這包括以下步驟： 1.在影片上添加字幕,並將其另存為可以嵌入到各組網站的格式。 2.從影片字幕中整理出逐字稿,並以 .txt 格式提供連結。 3.在各組嵌入的教學影片下方,提供影片的教學重點摘要。 這樣做可以更容易理解影片的內容，並提供方便的資源供參考。 Github 個人與分組倉儲的維護方式 各組成員的個人倉庫名稱為「cd2024」,而期中分組倉庫位於「mdecd2024」帳號下。分組倉庫的命名格式為以「2b」開頭，後接「-」,再加上「midag」以及組別號碼。每位組員的「cd2024」個人倉庫都必須被設定為相對應分組倉庫的子模組,這樣各組員便能夠獨立管理和維護自己的課程倉庫,同時可以自行決定是否要導入分組倉庫的內容版本。可使用以下四種方法之一進行操作：Replit、Codespaces、Gitpod 或本地主機（localhost）.","tags":"w4","url":"./2120240314.html"},{"title":"41123221-w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引,這一週的主要目標是有效地利用 Github Codespaces 與 Gitpod,並且將組員的倉儲設定為分組倉儲的子模組。同時也引入 LaTeX 轉換為 PDF 的機制,為期中分組報告的製作做好準備. 子模組 使用 Github Codespaces 建立與管理您的課程倉儲。在課程倉儲中,透過以下步驟將各組員的個人網站作為 submodule 納入分組倉儲： 1.首先,使用 git submodule add 命令將組員的個人網站作為 submodule 加入到您的分組倉儲中。例如：git submodule add <組員個人網站的 URL> <組員學號> 2.然後,執行 git add . 將變更加入暫存區。 3.接著,使用 git commit -m \"add 學號 submodule\" 提交變更。 4.最後,使用 git push 將變更推送到遠端倉儲中。 這樣一來,分組倉儲就會包含各組員的個人網站作為 submodule，並且能夠在 Github Codespaces 中方便地進行管理和編輯。 有關 Codespaces 使用 考慮到 Github Codespaces 免費帳戶每月只有 120 個小時的限制,使用者可以在需要時選擇在 Github 倉儲中編輯 Markdown 目錄中的網誌文章。當需要使用 Pelican 轉換檔案或編輯 config/content.htm 以及轉換靜態網頁內容時,才啟動 Codespaces。這樣可以最大程度地優化 Codespaces 免費核心小時的使用. 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作.","tags":"w3","url":"./2120240307.html"},{"title":"41123221-w2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引，將使用 Github Classroom 進行協同分組。除了 Replit 之外，我們還將引導學員使用 Github Codespaces 來維護個人或分組的網站內容. 利用 Github Classroom 指定分組倉儲 在使用 Github Classroom 指定分組倉庫時，倉庫位於 mdecd2024 帳戶下。雖然每個組員對該分組倉庫有修改權限，但在將分組倉庫導入 Replit 時，由於倉庫擁有者是 mdecd2024，因此無法在 Replit 帳戶下進行授權。解決這個問題的方法是創建一個新的 Replit，點擊 \"Create a Repl\"，然後選擇 \"Import from GitHub\"，使用 \"From URL\" 將組別倉庫的連結輸入。然後選擇 Python 語言，點擊 \"Import from GitHub\" 來成功建立。接下來，您可以使用 ssh-keygen 命令在 .ssh 目錄下創建 id_rsa 和 id_rsa.pub。每個人都需要建立一個並將公鑰添加到其 GitHub 帳戶中。然後，您需要在 .ssh 目錄中創建 config 文件，將倉庫的 .git/config 中的 https 協議改為 SSH（git@github.com:your_account/cd2024.git）。通過這樣的配置，您可以在 Replit 中以 SSH 模式獲取對 GitHub 帳戶下特定倉庫的修改權限。但是，由於 Replit 的免費帳戶環境會不定期刪除 /home/runner/.ssh 目錄中的授權資料，因此如果要使用 Replit 維護從 GitHub Classroom 獲取授權的分組倉庫，就需要使用程式方法來配置 .ssh 中的 id_rsa 和 config 文件. 利用 Codespaces 維護倉儲與網站 安裝所需的 Python 模組使用 init_replit 指令。 動態指令： 1.使用 chmod u+x init_replit 設置權限。 2.執行 ./init_replit。 3.啟動程式，使用 Python3 main.py。 靜態指令： 1.使用 Python3 -m http.server。 推送指令： 1.加入所有變更，使用 git add .。 2.做出提交，使用 git commit -m \"新增: 你要推送的內容\"。 3.推送至遠端儲存庫，使用 git push。","tags":"w2","url":"./2120240229.html"},{"title":"41123221-w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引，首先建立倉儲，再以Replit進行修改，接著在Replit建立網誌，記錄每周的進度，應用Odoo PLM管理機械設計流程. 創建個人課程倉儲 登入至自己的 GitHub 帳號後，點擊此連結[ https://github.com/mdecycu/cmsimde_site ]，或者在Teams中找到此連結。使用Template建立一個新倉儲，並命名為\"cd2024\"。在倉儲設定中的 pages 設定中，將 main 分支設為網頁根目錄，這樣網頁就能正常運行了. 將倉儲 import 至 Replit 在Replit帳號的設定中，找到Connected Services(連線服務)並連接GitHub，這樣就可以在Replit中進行改版，並且有權限將修改後的內容推回自己的網站. import 完如何進行改版 import完成後，動態網站就會顯示出來。點擊進入後，輸入\"admin\"就可以輕鬆增加或修改想要的內容，完成後，在右上角點擊\"Convert\"將內容轉為靜態。然後，在Replit的Git中提交新增的內容，然後Push，稍等片刻後，就可以在靜態網站上看到剛剛新增的內容. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2120240222.html"}]};