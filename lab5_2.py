from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import ElementNotInteractableException

driver = webdriver.Chrome()

driver.get("http://demo-store.seleniumacademy.com/")

links = driver.find_elements(By.TAG_NAME, "a")

for link in links:
    try:
        href = link.get_attribute("href")
        if href:
            driver.get(href)
            print(f"Redirect to: {href}")

    except StaleElementReferenceException:
        print(
            f"Element not found"
        )
    except ElementNotInteractableException as e:
        print(f"Couldn't redirect to '{href}': {str(e)}")

search_box = driver.find_element(By.ID, "search")
search_box.send_keys("shirt")

search_button = driver.find_element(By.CLASS_NAME, "button.search-button")
search_button.click()

add_to_cart_button = driver.find_element(By.ID, "product-collection-image-402")
add_to_cart_button.click()
add_to_cart_button = driver.find_element(By.ID, "swatch22")
add_to_cart_button.click()
add_to_cart_button = driver.find_element(By.ID, "option80")
add_to_cart_button.click()
add_to_cart_button2 = driver.find_element(By.CLASS_NAME, "btn-cart")
add_to_cart_button2.click()

success_message = driver.find_element(By.CLASS_NAME, "success-msg")
assert "was added to your shopping cart." in success_message.text

view_cart_button = driver.find_element(
    By.XPATH, "//a[@title='View your shopping cart']"
)
view_cart_button.click()

cart_items = driver.find_elements(By.CLASS_NAME, "product-cart-image")
assert len(cart_items) > 0

remove_button = driver.find_element(By.XPATH, "//a[@title='Remove item']")
remove_button.click()

empty_cart_message = driver.find_element(
    By.XPATH, "//h1[text()='Shopping Cart is Empty']"
)
assert "Shopping Cart is Empty" in empty_cart_message.text

driver.quit()
