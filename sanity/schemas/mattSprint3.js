export default {
    name: "mattSprint3",
    title: "Portfolio item",
    type: "document",
    fieldsets: [{ name: "sprintInfo", title: "Sprint details" }],
    fields: [
        {
            name: "image",
            title: "Featured image",
            type: "image",
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            fieldset: "sprintInfo",
        },
        {
            name: "sprint",
            title: "Sprint",
            type: "string",
            fieldset: "sprintInfo",
        },
        {
            name: "duration",
            title: "Duration",
            type: "string",
            fieldset: "sprintInfo",
        },
        {
            name: "deliverable",
            title: "Deliverable",
            type: "string",
            fieldset: "sprintInfo",
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
            ],
        },
    ],
};
