var input = document.getElementById("input");
var output = document.getElementById("output");

const selectTag = document.querySelectorAll("select")
var btn = document.getElementById("translate");


selectTag.forEach(tag => {
    for(var language in lang){
        var op = `<option value="${language}">${lang[language]}</option>`;
        tag.insertAdjacentHTML("beforeend", op)
    }
});


btn.addEventListener("click", () => {
    var text = input.value;
    var translateFrom = selectTag[0].value;
    var translateTo = selectTag[1].value;

    var api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(api).then(res => res.json()).then(data => {
        console.log(data);
        output.value = data.responseData.translatedText;
    })

})