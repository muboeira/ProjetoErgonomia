var htmlEditor = document.querySelector("#htmlEditor")
var cssEditor  = document.querySelector("#cssEditor")
var jsEditor   = document.querySelector("#jsEditor")

function updatePreview() {
  var previewFrame = document.getElementById("preview")
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document
  preview.open()
  preview.write("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>Document</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"> <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"style.css\" /> <style>" + cssEditor.value + "</style></head><body>"+ htmlEditor.value + "<scr" + "ipt>" + jsEditor.value + "</scr" + "ipt><script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script></body></html>")
  preview.close()
}
updatePreview()

htmlEditor.addEventListener("keyup", function() {
  updatePreview()
})
cssEditor.addEventListener("keyup", function() {
  updatePreview()
})
jsEditor.addEventListener("keyup", function() {
  updatePreview()
})


