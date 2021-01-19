const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
    let visitedThemeBar = false;
    visit(markdownAST, ["list", "thematicBreak"], node => {
        console.log(node);
        let { type, children } = node;

        if (type === "thematicBreak" && !visitedThemeBar) {
            visitedThemeBar = true;
        }

        if (!visitedThemeBar) {
            return;
        }

        if (!children) {
            return;
        }



        // let { depth } = node
        // // Skip if not an h1
        // if (depth !== 1) return
        // Grab the innerText of the heading node
        let text = toString(node)
        const html = `
        <h1 style="color: rebeccapurple">
          ${text}
        </h1>
        `


        children = children.map(child => {
            a = {
                url: "",
                linkText: "",
                description: "",
                type: "awesome-card",
                children: undefined,
                value: "",
            }
            // console.log("child:", child);
            const { children: subChildren } = child;
            if (subChildren) {
                // console.log("subChildren:", subChildren);
                const { children: subChildChildren } = subChildren[0];
                if (subChildChildren) {
                    // console.log("subChildChildren:", subChildChildren);
                    if (subChildChildren[0].type === "link") {
                        a.url = subChildChildren[0].url;
                        a.linkText = subChildChildren[0].children[0].value;
                    }
                    if (subChildChildren[1].type === "text") {
                        a.description = subChildChildren[1].value.replace(" - ", "");
                    }
                }
            }

            return {
                ...child,
                ...a
            };
        });

        // const testing = `<testing>${children}</testing>`;

        // console.log("testing", testing);

        node.test = "asdfasdfs";
        node.type = "html"
        node.children = children
        node.value = "sss"
    })




    return markdownAST
}