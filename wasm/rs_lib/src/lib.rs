use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn loadResource (input: &str) -> String {
  format!("Hello, {}!", input)
}

#[wasm_bindgen]
pub fn serveResource (input: &str) -> String {
    let resource = input.split(':').collect();
    let resourceName = resource[0];
    let resourceType = resource[1];
    let mut resourcePath = !format("lobot/resources/{}/{}.{}", type, resourceName, resourceType);
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    let result = add(1, 2);
    assert_eq!(result, 3);
  }
}
