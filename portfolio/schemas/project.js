export default {
    name: "work",
    title: "Work",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "projectType",
            title: "project type",
            type: "string",

            options: {
                list: [
                    {
                        value: "personal",
                        title: "Personal",
                    },
                    {
                        value: "client",
                        title: "Client",
                    },
                    {
                        value: "organisation",
                        title: "Organisation",
                    },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};
