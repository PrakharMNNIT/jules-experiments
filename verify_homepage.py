from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000...")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for the hero section to be visible
            print("Waiting for hero section...")
            page.wait_for_selector("text=वज़न कम करना इतना मुश्किल क्यों है?", timeout=30000)

            # Allow animations to complete
            time.sleep(2)

            # Take screenshot
            print("Taking screenshot...")
            page.screenshot(path="homepage.png", full_page=True)
            print("Screenshot saved to homepage.png")

        except Exception as e:
            print(f"Error: {e}")
            # Take screenshot of whatever is visible for debugging
            try:
                page.screenshot(path="error_state.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == "__main__":
    run()
