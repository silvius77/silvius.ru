console.log('alle');
text_for_count = document.getElementById("text_for_count");

text_for_count.addEventListener("input", change_form);

div_to_del = document.getElementById("to_del");
elem = document.getElementById("text_to_delete");

// tags = ['anykey_its_ok', 'text'];

function change_form() {
    tags = get_tags(text_for_count.value);
    localStorage.setItem('tags',  JSON.stringify(tags));
    show_tags();
    
    if (text_for_count.value.length > 1024){
        document.getElementById("counter").style.color = "red";
        div_to_del.hidden = false;
    }
    else
    {
        document.getElementById("counter").style.color = "green";
        div_to_del.hidden = true;
    }
    document.getElementById("counter").textContent= text_for_count.value.length;
    
    if (text_for_count.value.length > 1024){
        text = text_for_count.value;
        cut = text.slice(1024, -1);
        text_to_delete.innerText = cut;
        text_to_delete.style.color = "red";
    }
};



d = document.getElementById("test1");

function btn_click(){
    d.hidden = true;
}


function get_tags(full_text){
    tags_list = ["anykey_its_ok"];
    full_text = full_text.split(' ');
    // Поиск всех иностарнных слов в тексте
    engWords = []

    full_text.forEach(word => {
        let code = word.charCodeAt(0)
        if (code >= 65 && code <= 90 || code >=97 && code <= 122){
            tags_list.push(word);
        }
    });

     // Spread. Убираем дубликаты и преобразуем из set в list
    let tags = [...new Set(tags_list)];
    return tags;
}

function show_tags(){
    let tags = JSON.parse(localStorage.tags);
    t = ""
    tags.forEach(w =>{
        t += `#${w} `
    })
    document.getElementById("tags").value = t;
}