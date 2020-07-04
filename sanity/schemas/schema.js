// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import boPortfolio from "./boPortfolio";
import wenyiSprint1 from "./wenyiSprint1";
import wenyiSprint2 from "./wenyiSprint2";
import wenyiSprint3 from "./wenyiSprint3";
import mattSprint1 from "./mattSprint1";
import mattSprint2 from "./mattSprint2";
import mattSprint3 from "./mattSprint3";

import youtube from "./youtube";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */

        boPortfolio,
        wenyiSprint1,
        wenyiSprint2,
        wenyiSprint3,
        mattSprint1,
        mattSprint2,
        mattSprint3,
        youtube,
    ]),
});
