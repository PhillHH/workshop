from playwright.sync_api import sync_playwright

def verify_site_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Ensure verification directory exists
        import os
        os.makedirs("verification", exist_ok=True)

        # 1. Home Page
        print("Navigating to Home...")
        page.goto("http://localhost:5173")
        page.wait_for_selector("text=Werden Sie vom")
        page.screenshot(path="verification/01_home.png")
        print("Home screenshot taken.")

        # 2. Audience Page (Neulinge)
        print("Navigating to Neulinge...")
        page.goto("http://localhost:5173/fuer-neulinge")
        page.wait_for_selector("text=Keine Angst vor der Technik")
        page.screenshot(path="verification/02_audience_neulinge.png")
        print("Neulinge screenshot taken.")

        # 3. Course Detail Page (KI Grundlagen)
        print("Navigating to Course...")
        page.goto("http://localhost:5173/ki-grundlagen")
        page.wait_for_selector("text=KI-Grundlagen")
        page.screenshot(path="verification/03_course_grundlagen.png")
        print("Course screenshot taken.")

        # 4. Checkout Page
        print("Navigating to Checkout...")
        page.goto("http://localhost:5173/checkout?course=grundlagen")
        page.wait_for_selector("text=Buchung abschließen")
        # Fill Form
        page.fill("input[name=firstName]", "Max")
        page.fill("input[name=lastName]", "Mustermann")
        page.fill("input[name=email]", "max@example.com")
        page.fill("input[name=address]", "Musterstraße 1")
        page.fill("input[name=zip]", "12345")
        page.fill("input[name=city]", "Musterstadt")

        page.screenshot(path="verification/04_checkout_form.png")
        print("Checkout form screenshot taken.")

        # Submit Form (Prepayment)
        page.click("button[type=submit]")
        page.wait_for_selector("text=Vielen Dank!")
        page.screenshot(path="verification/05_checkout_success.png")
        print("Checkout success screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_site_navigation()
