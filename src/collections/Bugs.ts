import {CollectionConfig} from "payload";

export const Bugs: CollectionConfig = {
    slug: 'bugs',
    fields: [
        {
            type: 'text',
            name: 'bugReport',
        }
    ],
    versions: {
        drafts: {
            autosave: true,
            schedulePublish: true
        }
    }
}