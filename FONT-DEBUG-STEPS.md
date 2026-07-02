# Font debug steps

## Test URLs
- /font-debug.php
- /assets/css/fonts.css
- /assets/fonts/iransans/IRANSansWeb(FaNum).woff2
- /assets/fonts/iranyekan/IRANYekanX-Regular.woff2
- /assets/fonts/dana/Dana-FaNum-Regular.ttf

## What to verify
1. The stored font key in /font-debug.php matches the selected font.
2. The sample text in /font-debug.php visually changes.
3. Direct font files open without 404/403.
4. The admin page body has `data-arasb-font` set.
