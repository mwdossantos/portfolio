export default {
    name: "boPortfolio",
    title: "Portfolio item",
    type: "document",
    fields: [
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
