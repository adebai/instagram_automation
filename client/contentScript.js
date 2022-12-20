let templates = [
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : `ctrl+alt+1`,
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
    {
        "name" : "Goldman Sachs",
        "message" : "Hi there! Thanks for reaching out, I would defeinitely love to help out with whatever questions you might have about the industry and what you want to know about all the industry best practices and customs.",
        "shortcut" : "ctrl+alt+1",
        "favourite" : true,
        "created_at" : 1671443701717,
        "modified_at" : 1671443701717,
    },
];
let html = `<div class="inau_template">
    <div class="inau_template_head">
    <p class="inau_template_name">{{template.name}}
        <span class="inau_copied" id="copy-{{template.id}}">Copied! ✅</span>
        <span class="inau_delete">🗑️</span>
    </p>
    </div>
    <div class="inau_template_body">
        <p class="inau_template_message_excerpt inau_click_to_reveal" data-templateId="{{template.id}}" onclick="copyText({{template.id}})">{{template.message}}</p>
    </div>
    <div class="inau_template_footer">
        <button class="inau_edit_template">✏️ Edit</button>
        <span class="inau_shortcut">
        <span class="inau_shortcut_help">
        <span class="inau_margin-bottom">To insert</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right inau_margin-bottom" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        </span>
        {{template.platformCommand}} {{template.indexText}}</span>
    </div>
</div>`;

let templatesDiv = document.querySelector(".inau_templates");
let os = window.navigator.userAgent.indexOf("Mac")  != -1 ? "mac" : "others";
let displayTemplates = (e, i) => {
    e.index = i+1;
    e.id = i;
    e.platformCommand = os == "mac" ? "<span class='inau_ctr'>⌘</span> <span class='inau_ctr'>⌥</span>" : "<span class='inau_ctr'>ctrl</span>  <span class='inau_ctr'>alt</span>";
    if(e.index > 9 ) e.index = 0;
    e.indexText = "<span class='inau_ctr'>" + e.index + "</span>";
    templatesDiv.insertAdjacentHTML("beforeend", 
    replaceContent(html, e, "template")
    );
};
let replaceContent = (html, template, identifier) => {
    Object.keys(template).forEach(data => {
        html = html.replaceAll("{{" + identifier + "." + (data) + "}}", template[data]);
    });
    return html;
};
templates.forEach(displayTemplates);
let copyText = (id) => {
    navigator.clipboard.writeText(templates[id].message);
    setTimeout(()=>{
        document.getElementById("copy-"+id).style.display = "inline";
        setTimeout(()=>{
            document.getElementById("copy-"+id).style.display = "none";
        }, 1000)
    },200)
}

/**
 * 
 * Click events
 * 
 */
let minimise = document.querySelector('.inau_right_arrow');
let maximize = document.querySelector('.inau_side');
minimise.addEventListener("click", function(event) {
    document.querySelector('.inau_frame').classList.replace("inau_size_1", "inau_size_0");
    document.querySelector('.inau_side').classList.remove("inau_size_0");
})

maximize.addEventListener("click", function(event) {
    document.querySelector('.inau_frame').classList.replace("inau_size_0", "inau_size_1");
    document.querySelector('.inau_side').classList.add("inau_size_0");
})


