from selenium import webdriver
from selenium.webdriver.common.by import By
import math

driver = webdriver.Chrome()

driver.get("http://suninjuly.github.io/math.html")

try:
    x_element = driver.find_element(By.ID, "input_value")
    x = int(x_element.text)
    result = str(math.log(abs(12 * math.sin(x))))
    input_element = driver.find_element(By.ID, "answer")
    input_element.send_keys(result)
    checkbox = driver.find_element(By.ID, "robotCheckbox")
    checkbox.click()
    radiobutton = driver.find_element(By.ID, "robotsRule")
    radiobutton.click()
    submit_button = driver.find_element(By.CSS_SELECTOR, '[type="submit"]')
    submit_button.click()

finally:
    driver.quit()
