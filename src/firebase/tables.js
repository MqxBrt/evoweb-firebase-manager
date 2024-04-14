const tables = [
    {
        firebaseName: "Products",
        displayName: "Formules",
        attributes: [
            ["adminPanel", "checkbox"],
            ["assestCreation", "checkbox"],
            ["completeMakeOver", "checkbox"],
            ["creation", "checkbox"],
            ["database", "checkbox"],
            ["form", "text"],
            ["hasBackendServer", "checkbox"],
            ["hosting", "checkbox"],
            ["hostingMonthTime", "number"],
            ["icon", "text"],
            ["isHot", "checkbox"],
            ["logoDesign", "checkbox"],
            ["mockups", "checkbox"],
            ["multipage", "checkbox"],
            ["multipleModel", "checkbox"],
            ["oneYearDomain", "checkbox"],
            ["postingArticles", "checkbox"],
            ["postingPerWeek", "number"],
            ["price", "text"],
            ["src", "text"],
            ["support", "checkbox"],
            ["supportMonthTime", "number"],
            ["text", "text"],
            ["websiteRefresh", "checkbox"]
        ],
    },
    {
        firebaseName: "Producers",
        displayName: "Membres",
        attributes: [
            ["age", "number"],
            ["bio", "text"],
            ["link", "text"],
            ["name", "text"],
            ["src", "text"],
            ["start", "checkbox"],
        ],
    }
]

export { tables };