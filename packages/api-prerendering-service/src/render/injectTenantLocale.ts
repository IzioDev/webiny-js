export default args => async tree => {
    console.log("Injecting tenant and locale into HTML...");
    const meta = args?.args?.args?.configuration?.meta;
    if (!meta) {
        return;
    }

    tree.match({ tag: "head" }, node => {
        if (meta.tenant) {
            node.content.push(`<script>window.__PS_RENDER_TENANT__ = "${meta.tenant}";</script>`);
        }

        if (meta.locale) {
            node.content.push(`<script>window.__PS_RENDER_LOCALE__ = "${meta.locale}";</script>`);
        }

        return node;
    });
};
