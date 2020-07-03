export default {
    name: "boPortfolio",
    title: "Portfolio item",
    type: "document",
    fields: [
        {
            name: "sidebar",
            title: "Sidebar text",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "content",
            title: "Pictures",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        },
    ],
};
