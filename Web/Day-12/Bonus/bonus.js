class SQuery {
    constructor(selected) {
        this.selected = selected;
    }

    append(child) {
        this.selected.forEach(domElement => {
            domElement.innerHTML += String(child);

            //String() will call .toString(), so SQuery will work for text and HTML text
        })
        return this;
    }

    toString() {
        return this.selected.reduce((acc, current) => {
            return acc + current.outerHTML;
        }, '')
    }

    prepend(child) {
        this.selected.forEach(domElement => {
            domElement.innerHTML = String(child) + domElement.innerHTML;
        })
        return this;
    }
}

function grandChildren(parent, selector) {
    switch (selector[0]) {
        case '.':
            return Array.from(parent.getElementsByClassName(selector.substring(1)));
            break;
        case '#':
            return [parent.getElementById(selector.substring(1))];
            break;
        default:
            return Array.from(parent.getElementsByTagName(selector));
    }
}

function directChildren(parent, selector) {
    let selected = [];
    for (let i = 0; i < parent.children.length; i++) {
        switch (selector[0]) {
            case '.':
                if (parent.children[i].classList.contains(selector.substring(1)))
                    selected.push(parent.children[i]);
                break;

            case '#':
                if (parent.children[i] === document.getElementById(selector.substring(1)))
                    selected.push(parent.children[i]);
                break;
            default: 
            if(parent.children[i].tagName.toLowerCase() === selector.toLowerCase())
            selected.push(parent.children[i]);
        }
    }
    return selected;
}

function S(selector){
    let queryStrings = selector.split(' ').map(selection=> selection.trim());
    let currentSelected = grandChildren(document, queryStrings[0]);
    let direct = false;
    for(let i = 1; i < queryStrings.length; i++){
        if(queryStrings[i] === '>'){
            direct = true;
            continue;
        }
        currentSelected = currentSelected.reduce((acc, current)=>{
            return acc.concat(
                direct?
                directChildren(current, queryStrings[i]):
                grandChildren(current, queryStrings[i])
            );
        }, []);
        direct = false;
    }
    return new SQuery(currentSelected)
}
