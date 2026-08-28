function logNextSiblingText(listItem) {
  const nextSibling = listItem.nextElementSibling;
  
  if (nextSibling) {
    console.log(nextSibling.textContent);
  } else {
    console.log("No more items");
  }
}
