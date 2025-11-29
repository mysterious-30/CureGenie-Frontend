# Translation Replacement Script
# Replaces all t() calls with hardcoded English text

# Translation mapping (from old LanguageContext)
$translations = @{
    # Auth
    "auth.back" = "Back"
    "auth.secure" = "Secure Verification"
    "auth.title" = "Verify Your Identity to Continue"
    "auth.subtitle" = "Scan your Student ID — it helps us give you a personalized experience."
    "auth.scanner.ready" = "Scanner Ready"
    "auth.scanner.instruction" = "Tap Scan and point your card toward the camera"
    "auth.scanner.align" = "Align Student ID Card Here"
    "auth.verifying" = "Verifying..."
    "auth.denied" = "Camera access blocked. Allow camera permission in settings or talk to campus admin."
    "auth.step1" = "Hold your Student ID card inside the frame, aligning it with the corner guides."
    "auth.step2" = "Ensure the card is flat and the barcode/ID number is clearly visible."
    "auth.step3" = 'Tap "Capture Image" to take the photo, then tap "Submit for Verification" to verify your ID.'
    "auth.tips.title" = "Helpful Tips"
    "auth.tips.1" = "If barcode isn't reading: clean the card, increase ambient light, or try rotating the card 90°."
    "auth.tips.2" = "Don't have your card? Contact campus admin for verification assistance."
    "auth.tips.3" = "We only store a masked ID token for audits — we don't save your full ID number."
    "auth.btn.start" = "Start Camera"
    "auth.btn.capture" = "Capture Image"
    "auth.btn.submit" = "Submit for Verification"
    "auth.btn.retake" = "Retake Photo"
    "auth.btn.help" = "Need Help?"
    "auth.msg.requesting" = "Requesting camera permission..."
    "auth.msg.captured" = "Image captured! Review and submit to verify."
    "auth.msg.verifying" = "Verifying student ID..."
    "auth.msg.success" = "Verification Successful!"
    "auth.msg.failed" = "Verification Failed"
    "auth.msg.welcome" = "Welcome, "
    "auth.msg.redirect" = "Redirecting to dashboard..."
    "auth.msg.tryAgain" = "Try Again"
    
    # Settings
    "settings.title" = "Manage Your Profile & Preferences"
    "settings.subtitle" = "Customize your experience, update your information, and control how the Health Assistance Machine interacts with you."
    "settings.profile" = "Your Profile"
    "settings.name" = "Name"
    "settings.studentId" = "Student ID"
    "settings.registeredNumber" = "Registered Number"
    "settings.age" = "Age"
    "settings.allergy" = "Allergy"
    "settings.verifiedOn" = "Verified On"
    "settings.language" = "Language & Accessibility"
    "settings.preferredLanguage" = "Preferred Language"
    "settings.apply" = "Apply Changes"
    "settings.notifications" = "Notifications & Alerts"
    "settings.privacy" = "Privacy & Security"
    "settings.billing" = "Billing & Payments"
    "settings.support" = "Support & Helpdesk"
    "settings.logout" = "Logout Section"
    "settings.logoutBtn" = "Log Out Securely"
    "settings.btn.updatePhone" = "Update Phone Number"
    "settings.btn.refreshInfo" = "Refresh Student Info"
    "settings.notif.desc" = "Based on your previous usage, we can notify you about:"
    "settings.notif.list.1" = "Receipt deliveries"
    "settings.notif.list.2" = "Low-stock alerts for frequently purchased items"
    "settings.notif.list.3" = "Health tips based on seasonal changes"
    "settings.notif.list.4" = "High-fever or severe-symptom safety warnings"
    "settings.toggle.sms" = "SMS Alerts"
    "settings.toggle.email" = "Email Receipts"
    "settings.toggle.monthly" = "Monthly Usage Summary"
    "settings.toggle.emergency" = "Emergency Alerts"
    "settings.privacy.list.1" = "We protect your identity using secure student tokens."
    "settings.privacy.list.2" = "No personal medical records are stored"
    "settings.privacy.list.3" = "Only masked identity logs are kept for audit safety"
    "settings.privacy.list.4" = "You can delete your usage logs anytime"
    "settings.btn.viewData" = "View My Data"
    "settings.btn.deleteLogs" = "Delete My Logs"
    "settings.btn.privacyPolicy" = "Privacy Policy"
    "settings.btn.history" = "Transaction History"
    "settings.btn.download" = "Download Payment Summary"
    "settings.support.faq" = "Frequently Asked Questions"
    "settings.support.emergency" = "Emergency Medical Contact"
    "settings.btn.getHelp" = "Get Help Now"
    "settings.logout.desc" = "For security, you're auto-logged out after inactivity."
    
    # Quick Buy
    "quickbuy.back" = "Back to Dashboard"
    "quickbuy.cart" = "Cart"
    "quickbuy.title" = "What do you need right now?"
    "quickbuy.subtitle" = "Choose from essential first-aid items below. No analysis, no wait — just pick and buy."
    "quickbuy.rec.title" = "Recommended for You"
    "quickbuy.rec.subtitle" = "Based on your past usage and common needs"
    "quickbuy.wound.title" = "Wound & Injury Care"
    "quickbuy.fever.title" = "Fever & Pain Relief"
    "quickbuy.hygiene.title" = "Hygiene & Daily Needs"
    "quickbuy.seasonal.title" = "Seasonal Extras"
    "quickbuy.bundles.title" = "Bundles & Combos"
    "quickbuy.add" = "Add to Cart"
    "quickbuy.buyBundle" = "Buy Bundle"
    "quickbuy.stock.low" = "Low Stock"
    "quickbuy.stock.left" = "Only {count} left"
    "quickbuy.stock.in" = "In Stock"
    "quickbuy.cart.title" = "Shopping Cart"
    "quickbuy.cart.empty" = "Your cart is empty"
    "quickbuy.cart.total" = "Total"
    "quickbuy.cart.checkout" = "Proceed to Checkout"
    "quickbuy.cart.payment" = "Choose Payment Method"
    "quickbuy.cart.complete" = "Complete Purchase"
    "quickbuy.footer.1" = "OTC medicines only. No prescription drugs dispensed."
    "quickbuy.footer.2" = "Serious injury? Use 'Health Assistance' for guided help."
    "quickbuy.footer.3" = "Stock updates every 30 minutes."
    
    # History
    "history.back" = "Back to Dashboard"
    "history.title" = "Your Usage History"
    "history.subtitle" = "View your recent visits, receipts, and items you purchased from this Health Assistance Machine."
    "history.search.placeholder" = "Search: item name, month, or receipt ID"
    "history.filter.btn" = "Filter"
    "history.filter.date" = "Filter by Date"
    "history.filter.category" = "Filter by Category"
    "history.filter.all" = "All"
    "history.filter.today" = "Today"
    "history.filter.week" = "Week"
    "history.filter.month" = "Month"
    "history.filter.medicine" = "Medicine"
    "history.filter.firstAid" = "First Aid"
    "history.filter.hygiene" = "Hygiene"
    "history.filter.aiAdvice" = "AI-Advice"
    "history.recent.title" = "Recent Activity"
    "history.recent.subtitle" = "Auto-updates every time you use the machine"
    "history.recent.viewAll" = "View Full Timeline"
    "history.receipts.title" = "Your Digital Receipts"
    "history.receipts.subtitle" = "Auto-generated and securely stored (masked identity)"
    "history.receipts.receipt" = "Receipt"
    "history.receipts.total" = "Total"
    "history.receipts.items" = "Items:"
    "history.receipts.payment" = "Payment:"
    "history.receipts.sentTo" = "Sent to:"
    "history.receipts.download" = "Download"
    "history.receipts.print" = "Print Copy"
    "history.insights.title" = "Smart Insights"
    "history.insights.subtitle" = "AI-generated, personalized based on your usage"
    "history.insights.showMore" = "Show More Insights"
    "history.insights.showLess" = "Show Less Insights"
    "history.download.title" = "Download Your Full Log"
    "history.download.subtitle" = "Export your entire usage history for records or documentation"
    "history.download.btn" = "Download My History (PDF)"
    "history.download.note" = "Generated using your masked student token"
    "history.privacy.title" = "Privacy Notes"
    "history.privacy.1" = "Only masked Student-ID tokens are stored."
    "history.privacy.2" = "No personal medical data is kept — only item purchases and timestamps."
    "history.privacy.3" = "You can request deletion of your stored logs anytime."
    "history.alerts.downloadReceipt" = "Downloading receipt: {receiptId}"
    
    # Analysis
    "analysis.title" = "Get AI Health Assistance"
    "analysis.subtitle" = "Tell us what's bothering you, we'll guide you safely."
    "analysis.desc" = "Our AI will analyze your symptoms and recommend safe first-aid steps."
    "analysis.back" = "Back to Dashboard"
    "analysis.urgent.title" = "Urgent attention recommended"
    "analysis.urgent.desc" = "Please seek medical help nearby. This appears to be a serious condition that requires professional medical attention."
    "analysis.urgent.btn.doctor" = "Call Nearby Doctor"
    "analysis.urgent.btn.hospital" = "Show Hospital List"
    "analysis.upload.title" = "Upload or Capture the Affected Area"
    "analysis.upload.subtitle" = "Take a clear photo using the machine camera or upload from your phone"
    "analysis.upload.btn.capture" = "Capture Image"
    "analysis.upload.btn.capture.sub" = "Use machine camera"
    "analysis.upload.btn.upload" = "Upload Image"
    "analysis.upload.btn.upload.sub" = "From your device"
    "analysis.upload.tip" = "Tip:"
    "analysis.upload.tip.text" = "If it's a cut, rash, burn, swelling, or skin irritation — this helps the AI understand it better."
    "analysis.desc.title" = "Add a Description"
    "analysis.desc.subtitle" = "Describe your issue in your own words."
    "analysis.desc.placeholder" = "Describe your symptoms… (Optional)"
    "analysis.desc.examples" = "Examples you can use:"
    "analysis.desc.ex.1" = "Fever since morning, slight headache"
    "analysis.desc.ex.2" = "Small cut on finger while using cutter"
    "analysis.desc.ex.3" = "Red patches after touching chemicals"
    "analysis.desc.ex.4" = "Mild ankle sprain during sports"
    "analysis.btn.analyze" = "Analyze My Issue"
    "analysis.btn.analyzing" = "Analyzing..."
    "analysis.btn.note" = "Takes ~3 seconds. Your data stays private."
    "analysis.privacy.title" = "Privacy Note"
    "analysis.privacy.text" = "We don't store your photo. It's analyzed once and deleted immediately. Only a brief summary is kept for your receipt."
    "analysis.modal.title" = "Almost There!"
    "analysis.modal.sub.both" = "Please complete the following to analyze your symptoms"
    "analysis.modal.sub.one" = "Please complete this requirement to analyze your symptoms"
    "analysis.modal.img.title" = "Upload an Image"
    "analysis.modal.img.desc" = "Take or upload a clear photo of the affected area"
    "analysis.modal.desc.title" = "Describe Your Symptoms"
    "analysis.modal.desc.desc" = "Tell us how you're feeling (at least 10 characters)"
    "analysis.modal.btn" = "Got it"
    "analysis.modal.note.both" = "Both items are required for accurate AI analysis"
    "analysis.modal.note.one" = "This item is required for accurate AI analysis"
    "analysis.camera.title" = "Capture Photo"
    "analysis.camera.cancel" = "Cancel"
    "analysis.camera.capture" = "Capture"
    
    # Welcome/Home
    "welcome.header.title" = "CureGenie"
    "welcome.header.subtitle" = "Smart Health Assistance"
    "welcome.main.title" = "Welcome to CureGenie — The Smart Health Assistance Vending Machine"
    "welcome.main.subtitle" = "CureGenie combines intelligent triage, remote physicians, and ready-to-buy essentials so you can act within seconds."
    "welcome.btn.getStarted" = "Get Started"
    "welcome.btn.preview" = "Preview the Flow"
    "welcome.note" = 'Tap "Get Started" to begin. Guidance fee ₹10 for physician-reviewed recommendations.'
    "welcome.card.safety.title" = "Built for Your Safety"
    "welcome.card.safety.desc" = "This machine offers basic first aid only. Serious cases are immediately referred to a nearby doctor or hospital."
    "welcome.card.safety.sub" = "Every recommendation is reviewed by remote medical experts. Premium contrast and large tap targets keep the experience accessible."
    "welcome.card.hub.title" = "First-Aid Essentials Hub"
    "welcome.card.hub.desc" = "Purchase individual first-aid items instantly — no prescription, no wait."
    "welcome.essentials.1" = "Medical-grade bandages and sterile cotton"
    "welcome.essentials.2" = "Antiseptic wipes, gels, and sprays"
    "welcome.essentials.3" = "Reusable cold packs and skin-safe tape"
    "welcome.footer.terms" = "Terms & Privacy"
    "welcome.footer.safety" = "Safety Info"
    "welcome.footer.contact" = "Contact Support"
    "welcome.footer.disclaimer" = "Do not use this machine in place of emergency services. For life-threatening situations, call your local emergency number immediately."
    "preview.title" = "Want to see how this machine works?"
    "preview.subtitle" = "Get a quick preview before you start"
    "preview.step1.title" = "Verify Yourself"
    "preview.step1.desc" = "Scan your Student ID to verify your identity securely."
    "preview.step1.details" = "Quick verification takes less than 3 seconds. Your identity is protected with masked tokens."
    "preview.step2.title" = "AI Health Analysis"
    "preview.step2.desc" = "Upload a photo and describe your symptoms for safe first-aid guidance."
    "preview.step2.details" = "AI gives you step-by-step first-aid instructions tailored to your needs."
    "preview.step3.title" = "View Recommendations"
    "preview.step3.desc" = "See AI-assisted first-aid suggestions, severity level, and recommended items."
    "preview.step3.details" = "Get personalized guidance with confidence indicators and safety alerts for serious cases."
    "preview.step4.title" = "Buy Items Directly"
    "preview.step4.desc" = "Purchase essential first-aid items like bandages, antiseptic, and more instantly."
    "preview.step4.details" = "No wait, no analysis needed. Quick buy options for instant access to essentials."
    "preview.step5.title" = "Receipt Generation"
    "preview.step5.desc" = "Digital receipts are automatically sent to your registered email ID."
    "preview.step5.details" = "Keep a record of your purchases and care instructions. Download or print anytime."
    "preview.btn.prev" = "Previous"
    "preview.btn.next" = "Next"
    "preview.btn.gotIt" = "Got it!"
    "preview.step" = "Step"
    "preview.footer" = "Your data is never shared during preview. This is just a demonstration."
}

# Files to process
$files = @(
    "src\app\en\auth\page.tsx",
    "src\app\en\settings\page.tsx",
    "src\app\en\page.tsx",
    "src\app\en\quick-buy\page.tsx",
    "src\app\en\history\page.tsx",
    "src\app\en\health-analysis\page.tsx"
)

$totalReplacements = 0

foreach ($file in $files) {
    $fullPath = Join-Path $PSScriptRoot $file
    
    if (Test-Path $fullPath) {
        Write-Host "`nProcessing: $file" -ForegroundColor Cyan
        
        $content = Get-Content $fullPath -Raw
        $originalContent = $content
        $fileReplacements = 0
        
        # Replace each t() call
        foreach ($key in $translations.Keys) {
            $pattern = [regex]::Escape("t(`"$key`")")
            $replacement = "`"$($translations[$key])`""
            $newContent = $content -replace $pattern, $replacement
            
            if ($newContent -ne $content) {
                $count = ([regex]::Matches($content, $pattern)).Count
                $fileReplacements += $count
                $content = $newContent
            }
        }
        
        # Check if any changes were made
        if ($content -ne $originalContent) {
            Set-Content -Path $fullPath -Value $content -NoNewline
            Write-Host "  ✓ Replaced $fileReplacements t() calls" -ForegroundColor Green
            $totalReplacements += $fileReplacements
        } else {
            Write-Host "  - No changes needed" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ✗ File not found: $fullPath" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "✅ Translation replacement complete!" -ForegroundColor Green
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. Run 'npm run lint' to verify no errors" -ForegroundColor White
Write-Host "  2. Test the application" -ForegroundColor White
