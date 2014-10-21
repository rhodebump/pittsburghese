console.log("hi from inject.js");

var replacements = [];


chrome.runtime.sendMessage({
    method: "isEnabled"
}, function (response) {
    console.log(response.isEnabled);

    if (response.isEnabled == "true") {
        doReplacing();

    }

});


function doReplacing() {
    ///\bNow\b/g
    replacements.push([/there/g, "dere"]);
    replacements.push([/the/g, "da"]);
    replacements.push([/to be/gi, ""]);
    replacements.push([/what/gi, "wah"]);
    replacements.push([/your /gi, "yinzes "]);
    replacements.push([/for /gi, "fer "]);
    replacements.push([/you/gi, "you n’at"]);
    replacements.push([/god/gi, "gawd"]);
    replacements.push([/with/gi, "wit"]);
    replacements.push([/justice/gi, "jestice"]);
    replacements.push([/all/gi, "alls"]);
    replacements.push([/hand/gi, "han"]);
    replacements.push([/am not/gi, "ain't"]);
    replacements.push([/are not/gi, "ain't"]);
    replacements.push([/should not/gi, "ain't"]);
    replacements.push([/own/gi, "ahn"]);

    replacements.push([/well/gi, "woll"]);
    replacements.push([/and there/gi, "annare"]);
    replacements.push([/nosy/gi, "nebby"]);
    replacements.push([/pittsburgh/gi, "picksburg"]);
    replacements.push([/doing/gi, "doone"]);
    //you are going to a bad mall store and you smell bad 
    //yinz are gowen to a sucko mall store and yinz smell sucko 
    replacements.push([/bad/gi, "sucko"]);
    replacements.push([/going/gi, "gowen"]);
    replacements.push([/that's/gi, "ats"]);
    replacements.push([/that is/gi, "ats"]);
    replacements.push([/soda/gi, "pop"]);
    replacements.push([/tidy/gi, "redd up"]);
    replacements.push([/clean up/gi, "redd up"]);
    replacements.push([/broke/gi, "blowdup"]);
    replacements.push([/brought/gi, "brung"]);



    walk(document.body);

}

function walk(node) {
    //console.log("walk");

    // I stole this function from here:
    // http://is.gd/mwZp7E
    var child, next;
    switch (node.nodeType) {
    case 1:
        // Element
    case 9:
        // Document
    case 11:
        // Document fragment
        child = node.firstChild;
        while (child) {
            next = child.nextSibling;
            walk(child);
            child = next;
        }
        break;
    case 3:
        // Text node
        handleText(node);
        break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    //v = v.replace(/\bNow\b/g, "Meow");
    //v = v.replace(/\bnow\b/g, "meow");

    var replacement;
    var search;
    var replace;
    for (i = 0; i < replacements.length; i++) {
        //text += cars[i] + "<br>";
        replacement = replacements[i];
        search = replacement[0];
        replace = replacement[1];
        //2.$("body *").replaceText( /this|that/gi, "the other" );
        v = v.replace(search, replace);

        //$("body *").replaceText(search, replace);
        // console.log("replace",replacement);
    }


    textNode.nodeValue = v;
}