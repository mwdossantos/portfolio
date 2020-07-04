export default {
    name: "wenyiSprint2",
    title: "Portfolio item",
    type: "document",
    fieldsets: [{ name: "sprintInfo", title: "Sprint details" }],
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            fieldset: "sprintInfo",
        },
        {
            name: "image",
            title: "Featured image",
            type: "image",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                },
                {
                    type: "youtube",
                },
            ],
        },
    ],
};
