from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            # 1. Hindi Home Page
            print("Navigating to Hindi Home Page...")
            page.goto("http://localhost:3000/hi", timeout=60000)
            page.wait_for_selector("text=वज़न कम करना इतना मुश्किल क्यों है?", timeout=30000)
            time.sleep(2)
            page.screenshot(path="home_hi.png", full_page=True)
            print("Saved home_hi.png")

            # 2. Toggle to English (Note: Our toggle is a link)
            print("Clicking English Toggle...")
            # We locate the EN link inside the header
            page.get_by_text("EN", exact=True).click()
            page.wait_for_selector("text=Why is losing weight so difficult?", timeout=30000)
            time.sleep(2)
            page.screenshot(path="home_en.png", full_page=True)
            print("Saved home_en.png")

            # 3. Comparison Page (Direct Navigation)
            print("Navigating to Comparison Page...")
            page.goto("http://localhost:3000/hi/compare/ozempic-vs-wegovy", timeout=60000)
            page.wait_for_selector("text=Ozempic vs Wegovy", timeout=30000)
            time.sleep(2)
            page.screenshot(path="compare.png", full_page=True)
            print("Saved compare.png")

            # 4. Calculator Page (Interaction)
            print("Navigating to Calculator Page...")
            page.goto("http://localhost:3000/hi/calculator/parents", timeout=60000)
            page.wait_for_selector("text=BMI Calculator for Parents", timeout=30000)

            # Input values
            print("Entering calculator values...")
            page.locator("input[placeholder='e.g. 50']").fill("45") # Age
            page.locator("input[placeholder='e.g. 70']").fill("82") # Weight
            page.locator("input[placeholder='e.g. 170']").fill("175") # Height

            # Click Calculate
            page.get_by_role("button", name="Calculate Result").click()

            # Wait for result
            page.wait_for_selector("text=BMI Score", timeout=5000)
            time.sleep(2)
            page.screenshot(path="calculator_result.png", full_page=True)
            print("Saved calculator_result.png")

            # 5. Glossary Page
            print("Navigating to Glossary Page...")
            page.goto("http://localhost:3000/hi/glossary/bmi", timeout=60000)
            page.wait_for_selector("text=BMI (Body Mass Index)", timeout=30000)
            time.sleep(2)
            page.screenshot(path="glossary.png", full_page=True)
            print("Saved glossary.png")

        except Exception as e:
            print(f"Error: {e}")
            try:
                page.screenshot(path="error_state.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == "__main__":
    run()
