const sanityClient = require('@sanity/client')
import imageUrlBuilder from '@sanity/image-url'
const BlockContent = require('@sanity/block-content-to-react')

const client = sanityClient({
    projectId: 'guko1cn2',
    dataset: 'production',
    token:
        'sk3MI5isCMw4xpMP2lpkwhnFDamIaK2x1miXgARPYt121a8fBixDvVmVnii3TX7UIMBJgHDd2bQW8nOg7q5aUwQtRV7NUA1lhGj5XvIuORzn4jox2rwFXgFTSi8Mp0ug3gj9m9DDk34NmbrP54zHwRFzCY6izDpbmSOHjBxarGT9f3eb1K9k', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
})

const imageBuilder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return imageBuilder.image(source)
}

export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            photo: (props) => {
                return <img src={UrlFor(props.node.image).url()} />
            },
        },
    }

    return <BlockContent blocks={richText} serializers={serializers} />
}

// queries for content

// page queries

export async function getHomeData() {
    try {
        const corePartners = await getCorePartners()

        const query = `*[_type == "home"] {
            heroTitle,
            heroSubtitle,
            heroImage,
            heroDescription,
            usp,
            targetAudiences[]->{
                name,
                image,
                colorlist
            },
            targetAudienceSubtitle,
            ctaDescription,
            events[]->{
                name,
                description,
                dateTime,
                link
            },
            projects[]->{
                name,
                description,
                image,
                link
            }
          }
          `

        let home = await client.fetch(query)
        home = home ? (home.length ? home[0] : null) : null
        console.log(home.projects)

        return { home, corePartners }
    } catch (error) {
        console.log(error)
        return null
    }
}
