const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
    let contentPhase = false;
    let isFirstList = true;
    // TODO :: generalize this shit
    visit(markdownAST, ["list", "thematicBreak"], node => {
        let { type, children } = node;

        if (type === "thematicBreak") {
            contentPhase = !contentPhase;
        }

        if (!contentPhase) {
            if (isFirstList) {
                children = children.map(child => {
                    const isHeading = child.children[0].position.start.column === 3;
                    if (isHeading) {
                        return `<infoitem title="${toString(child.children[0].children[0])}"></infoitem>`;
                    }
                });
                node.type = "html";
                node.children = null;
                node.value = `<info>${children.join('')}</info>`;
                isFirstList = !isFirstList;
                return;
            }

            return; 
        }

        if (!children) {
            return;
        }

        children = children.map(child => {
            let url= "";
            let linkText= "";
            let description= "";
            const { children: subChildren } = child;
            if (subChildren) {
                const { children: subChildChildren } = subChildren[0];
                if (subChildChildren) {
                    if (subChildChildren[0].type === "link") {
                        url = subChildChildren[0].url;
                        linkText = subChildChildren[0].children[0].value;
                    }
                    if (subChildChildren[1].type === "text") {
                        description = subChildChildren[1].value.replace(" - ", "");
                    }
                }
            }

            return `<awesomecard url="${url}" text="${linkText}" description="${description}"></awesomecard>`;
        });

        node.type = "html";
        node.children = null;
        node.value = `<awesomegrid>${children.join('')}</awesomegrid>`;
    });

    return markdownAST;
}