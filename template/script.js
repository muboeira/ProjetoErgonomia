var htmlEditor = document.querySelector("#htmlEditor")
var cssEditor  = document.querySelector("#cssEditor")
var jsEditor   = document.querySelector("#jsEditor")

function updatePreview() {
  var previewFrame = document.getElementById("preview")
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document
  preview.open()
  preview.write("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>Document</title><style>" + cssEditor.value + "</style></head><body>"+ htmlEditor.value + "<scr" + "ipt>" + jsEditor.value + "</scr" + "ipt></body></html>")
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