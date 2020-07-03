import S from '@sanity/desk-tool/structure-builder'

// icons
import partnersIcon from 'react-icons/lib/md/hdr-strong'
import corePartnersIcon from 'react-icons/lib/md/favorite'
import otherPartnersIcon from 'react-icons/lib/md/supervisor-account'
import targetAudienceIcon from 'react-icons/lib/md/people'
import eventIcon from 'react-icons/lib/md/event'
import projectIcon from 'react-icons/lib/md/dns'
import pagesIcon from 'react-icons/lib/md/book'
import contentIcon from 'react-icons/lib/md/content-paste'
import settingsIcon from 'react-icons/lib/md/settings'
import homeIcon from 'react-icons/lib/md/home'
import aboutIcon from 'react-icons/lib/md/info'
import whyIcon from 'react-icons/lib/md/help'
import faqIcon from 'react-icons/lib/md/group-work'
import contactIcon from 'react-icons/lib/md/contact-phone'

export default () =>
    S.list()
        .title('Have a wonderful day, Ezra!')
        .items([
            // First pane
            S.listItem()
                .title('Pages')
                .icon(pagesIcon)
                .child(
                    // Second pane
                    S.list()
                        .title('All pages')
                        .items([
                            // Home page
                            S.listItem()
                                .title('Home')
                                .icon(homeIcon)
                                .child(S.editor().schemaType('home').documentId('home').title('Home')),
                            // About page
                            S.listItem()
                                .title('About')
                                .icon(aboutIcon)
                                .child(S.editor().schemaType('about').documentId('about').title('About')),
                            // Why page
                            S.listItem()
                                .title('Why')
                                .icon(whyIcon)
                                .child(S.editor().schemaType('why').documentId('why').title('Why')),
                            // FAQ page
                            S.listItem()
                                .title('FAQ')
                                .icon(faqIcon)
                                .child(S.editor().schemaType('faq').documentId('faq').title('FAQ')),
                            // Contact page
                            S.listItem()
                                .title('Contact')
                                .icon(contactIcon)
                                .child(S.editor().schemaType('contact').documentId('contact').title('Contact')),
                        ])
                ),

            // First pane
            S.listItem()
                .title('Content')
                .icon(contentIcon)
                .child(
                    // partners
                    S.list()
                        .title('All content')
                        .items([
                            S.listItem()
                                .title('Partners')
                                .icon(partnersIcon)
                                .child(
                                    S.list()
                                        .title('All partners')
                                        .items([
                                            S.listItem()
                                                .title('Core partners')
                                                .icon(corePartnersIcon)
                                                .child(S.documentTypeList('corePartner').title('All core partners')),

                                            S.listItem()
                                                .title('Other partners')
                                                .icon(otherPartnersIcon)
                                                .child(S.documentTypeList('otherPartner').title('All other partners')),
                                        ])
                                ),
                            S.listItem()
                                .title('Target audiences')
                                .icon(targetAudienceIcon)
                                .child(S.documentTypeList('targetAudience').title('All target audiences')),
                            S.listItem()
                                .title('Events')
                                .icon(eventIcon)
                                .child(S.documentTypeList('event').title('All events')),
                            S.listItem()
                                .title('Projects')
                                .icon(projectIcon)
                                .child(S.documentTypeList('project').title('All projects')),
                        ])
                ),

            // settings
            S.listItem()
                .title('Settings')
                .icon(settingsIcon)
                .child(S.editor().schemaType('siteSettings').documentId('siteSettings').title('Website settings')),
        ])
