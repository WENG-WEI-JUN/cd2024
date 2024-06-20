var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://weng-wei-jun.github.io/cd2024/ \n 網誌:\xa0 https://weng-wei-jun.github.io/cd2024/blog \n 簡報:\xa0 https://weng-wei-jun.github.io/cd2024/reveal \n 倉儲:  https://github.com/WENG-WEI-JUN/cd2024.git \n 41123221: 倉儲 , 網站   期中影片 自評:65 \n', 'tags': '', 'url': 'About.html'}, {'title': '翻譯文章(w3)', 'text': 'P1~P9 (目錄) \n', 'tags': '', 'url': '翻譯文章(w3).html'}, {'title': '影片上字幕(w5)', 'text': '\n 逐字稿 \n 摘要:先到replit >> 點選Account >> Connect Github >> 到 Github Settings >>\xa0Integrations >> Applications>> 檢查是否連結成功 \n 心得:影片內容簡潔易懂，跟著做就可以將帳號連結成功。 \n', 'tags': '', 'url': '影片上字幕(w5).html'}, {'title': 'Gemini 1.5 Pro(w8)', 'text': '以下為利用 PID 控制 CoppeliaSim\xa0 鋼球平衡台場景 的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. "這裡附上原本的 PID 控制程式碼" \n Gemini 1.5 Pro回答: \n Python \n \n \n import zmq\nimport matplotlib.pyplot as plt\nimport time\n\n# ZMQ connection parameters\ncontext = zmq.Context()\nsocket = context.socket(zmq.REQ)\nsocket.connect("tcp://127.0.0.1:5555")\n\n# PID control parameters\nkp = 1.0\nki = 0.1\nkd = 0.0\n\n# Ball position and control signal lists\nx_positions = []\ny_positions = []\ncontrol_signals = []\n\n# Simulation parameters\nsimulation_duration = 10.0  # Simulation duration in seconds\nsampling_time = 0.01  # Sampling time in seconds\ntolerance = 0.01  # Position error tolerance for termination\n\n# Initialize variables\nprevious_error = 0.0\nstart_time = time.time()\n\n# Control loop\nwhile time.time() - start_time < simulation_duration:\n    # Request ball position\n    socket.send(b"get ball position")\n    response = socket.recv()\n\n    # Parse ball position\n    x_position, y_position = response.split(b",")\n    x_position = float(x_position)\n    y_position = float(y_position)\n\n    # Calculate position error\n    error = 0.0 - x_position\n\n    # Calculate control signal using PID controller\n    u = kp * error + ki * error + kd * (error - previous_error)\n    previous_error = error\n\n    # Limit control signal\n    u = min(max(u, -10.0), 10.0)\n\n    # Send control signal\n    socket.send(b"set ball force %.2f" % u)\n\n    # Record ball position and control signal\n    x_positions.append(x_position)\n    y_positions.append(y_position)\n    control_signals.append(u)\n\n    # Check termination condition\n    if abs(error) < tolerance:\n        break\n\n    # Wait for next sampling time\n    time.sleep(sampling_time)\n\n# Close ZMQ connection\nsocket.close()\ncontext.destroy()\n\n# Plot ball position and control signal\nplt.figure(figsize=(12, 6))\n\nplt.subplot(2, 1, 1)\nplt.plot(x_positions, label="X Position")\nplt.plot(y_positions, label="Y Position")\nplt.legend()\nplt.xlabel("Time (s)")\nplt.ylabel("Position (m)")\n\nplt.subplot(2, 1, 2)\nplt.plot(control_signals, label="Control Signal")\nplt.legend()\nplt.xlabel("Time (s)")\nplt.ylabel("Force (N)")\n\nplt.tight_layout()\nplt.show()\n \n \n \n', 'tags': '', 'url': 'Gemini 1.5 Pro(w8).html'}, {'title': '論文摘要(w10)', 'text': '任務一: \n 倉儲連結 \n 網站連結 \n 分組倉儲連結 \n 任務二: \n 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) \n 探討在實施自動控制理論以穩定動態系統時所遇到的限制。它關注於球平衡平台的結構和理論研究，並通過實際裝置來展示自動控制理論在穩定動態系統中的局限性。為了進行比較，需要設計一個滿足系統需求的令人滿意的控制器。在設備和控制方面，引入了比例積分導數控制器來平衡平台上的球體系統。此外，還允許分析以確定穩定自然不穩定或半穩定系統的限制。最後，建立了球體平衡平台的理論模型，並與實際搭建的平台進行了比較，分析了理論與實際結果之間的差異，並探討了控制理論與系統實施所面臨的挑戰。 \n 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) \n 在一個FPGA晶片上，開發了兩個並行的PID控制器，用於獨立控制一個物件的兩個參數。確保了PID控制器對控制物件的輪廓計算進行並行處理，調節器的輸出已經被歸一化。透過自然類比，提高了在平台上調節球位置的精度。這種設計的控制器可用於即時控制具有許多受控參數的高速物體。 \n 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) \n 本研究詳細設計並比較了三種控制結構，以實現自動穩定球在平板上的位置和球的軌跡跟蹤。這三種結構分別是PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過了設計和實際比較。這些結構共同的特點是它們的控制器參數計算方法。此外，本文還包括了通過牛頓方法推導的平板上球的數學模型和直流電機位置迴路控制。 \n 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） \n 利用微控制器和相關控制算法，開發了一個球平衡系統，以保持球在橫樑上的平衡，並透過即時感測反饋來調整橫樑的角度。製作了三個原型並進行了比較，特別是在合理性和成本方面。整個系統設計包括一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，這樣的設計使得系統易於實現。通過微控制器程式設計來理解和實現控制算法，對於對MATLAB了解不多的學生也是適用的。開發了介面程式，以在MATLAB中繪製即時位置曲線。這個簡化的系統不僅作為理論知識和實踐技能之間的橋樑，同時也適用於更複雜的系統。 \n 文章五: Ball on the plate balancing control system (板上球平衡控制系統) \n 平衡問題一直是持續的研究挑戰，在許多領域都有應用，從教育到交通。二自由度球平衡實驗室試驗台是了解控制系統的重要設備之一。本文主要介紹了用於板上平衡球的機械設計。通過電阻式觸摸屏獲取球體位置數據，並使用步進電機和位置傳感器來控制平台的傾斜角度。設計基於AVR微控制器的雙環下位控制系統，利用PID控制器來維持球體的平衡。 \n 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) \n 利用QUARC軟體，我們設計並實現了對二維平台上球體位置的控制系統。我們設計了PD和PID控制器，並研究了設定點權重和積分器抗飽和等控制技術。透過攝像頭讀取球體位置，我們進行了校準和轉換，以確保控制系統的準確性和穩定性。 \n', 'tags': '', 'url': '論文摘要(w10).html'}, {'title': 'NX(w12)', 'text': '第三個圖: 錄影 , 零件 \n 零件尺寸: \n \n       \n', 'tags': '', 'url': 'NX(w12).html'}, {'title': '期末(w17)', 'text': '項目一: 車子零組件 \n \n 項目二: 組合 \n \n 項目三:模擬 \n', 'tags': '', 'url': '期末(w17).html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};