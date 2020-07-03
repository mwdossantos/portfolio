import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";

export default () =>
    S.list()
        .title("Have a wonderful day!")
        .items([
            // First pane
            S.listItem()
                .title("Portfolios")
                .icon(pagesIcon)
                .child(
                    // Second pane
                    S.list()
                        .title("All portfolios")
                        .items([
                            // Home page
                            S.listItem()
                                .title("Bo")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Pictures")
                                                .child(
                                                    S.editor()
                                                        .schemaType("boPortfolio")
                                                        .documentId("boPortfolio")
                                                        .title("Edit pictures")
                                                ),
                                        ])
                                ),

                            // Home page
                            S.listItem()
                                .title("Wenyi")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Sprint 1")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint1")
                                                        .documentId("wenyiSprint1")
                                                        .title("Edit Sprint 1")
                                                ),
                                            S.listItem()
                                                .title("Sprint 2")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint2")
                                                        .documentId("wenyiSprint2")
                                                        .title("Edit Sprint 2")
                                                ),
                                            S.listItem()
                                                .title("Sprint 3")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint3")
                                                        .documentId("wenyiSprint3")
                                                        .title("Edit Sprint 3")
                                                ),
                                        ])
                                ),

                            // Home page
                            S.listItem()
                                .title("Matthew")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Sprint 1")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint1")
                                                        .documentId("mattSprint1")
                                                        .title("Edit Sprint 1")
                                                ),
                                            S.listItem()
                                                .title("Sprint 2")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint2")
                                                        .documentId("mattSprint2")
                                                        .title("Edit Sprint 2")
                                                ),
                                            S.listItem()
                                                .title("Sprint 3")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint3")
                                                        .documentId("mattSprint3")
                                                        .title("Edit Sprint 3")
                                                ),
                                        ])
                                ),
                        ])
                ),
        ]);
