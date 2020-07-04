const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";
const BlockContent = require("@sanity/block-content-to-react");
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const client = sanityClient({
    projectId: "guko1cn2",
    dataset: "production",
    token:
        "sk3MI5isCMw4xpMP2lpkwhnFDamIaK2x1miXgARPYt121a8fBixDvVmVnii3TX7UIMBJgHDd2bQW8nOg7q5aUwQtRV7NUA1lhGj5XvIuORzn4jox2rwFXgFTSi8Mp0ug3gj9m9DDk34NmbrP54zHwRFzCY6izDpbmSOHjBxarGT9f3eb1K9k", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
    return imageBuilder.image(source);
}

export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props) => {
                return <img src={imageUrlFor(props.node).url()} />;
            },
            youtube: ({ node }) => {
                const { url } = node;
                const id = getYouTubeId(url);
                return <YouTube videoId={id} />;
            },
        },
    };

    return <BlockContent blocks={richText} serializers={serializers} />;
}

// queries for content

// page queries

export async function getBo() {
    try {
        const query = `*[_type == "boPortfolio"] {
            sidebar,
            content
        }
          `;

        let boPortfolio = await client.fetch(query);
        boPortfolio = boPortfolio ? (boPortfolio.length ? boPortfolio[0] : null) : null;

        return boPortfolio;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getWenyiSprint1() {
    try {
        const query = `*[_type == "wenyiSprint1"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint1 = await client.fetch(query);
        wenyiSprint1 = wenyiSprint1 ? (wenyiSprint1.length ? wenyiSprint1[0] : null) : null;

        return wenyiSprint1;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getWenyiSprint2() {
    try {
        const query = `*[_type == "wenyiSprint2"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint2 = await client.fetch(query);
        wenyiSprint2 = wenyiSprint2 ? (wenyiSprint2.length ? wenyiSprint2[0] : null) : null;

        return wenyiSprint2;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getWenyiSprint3() {
    try {
        const query = `*[_type == "wenyiSprint3"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint3 = await client.fetch(query);
        wenyiSprint3 = wenyiSprint3 ? (wenyiSprint3.length ? wenyiSprint3[0] : null) : null;

        return wenyiSprint3;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint1() {
    try {
        const query = `*[_type == "mattSprint1"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint1 = await client.fetch(query);
        mattSprint1 = mattSprint1 ? (mattSprint1.length ? mattSprint1[0] : null) : null;

        return mattSprint1;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint2() {
    try {
        const query = `*[_type == "mattSprint2"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint2 = await client.fetch(query);
        mattSprint2 = mattSprint2 ? (mattSprint2.length ? mattSprint2[0] : null) : null;

        return mattSprint2;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint3() {
    try {
        const query = `*[_type == "mattSprint3"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint3 = await client.fetch(query);
        mattSprint3 = mattSprint3 ? (mattSprint3.length ? mattSprint3[0] : null) : null;

        return mattSprint3;
    } catch (error) {
        console.log(error);
        return null;
    }
}
