export default args => async tree => {
    const meta = args?.args?.args?.configuration?.meta;
    if (!meta || !meta.notFoundPage) {
        return;
    }

    console.log("Injecting not-found page flag (__PS_NOT_FOUND_PAGE__) into HTML.");

    tree.match({ tag: "head" }, node => {
        node.content.push(`<script>window.__PS_NOT_FOUND_PAGE__ = true;</script>`);
        return node;
    });
};
