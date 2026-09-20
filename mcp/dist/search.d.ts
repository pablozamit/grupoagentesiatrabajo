export declare const DEFAULT_INDEX_URL = "https://grupoagentesiatrabajo.vercel.app/static/contentIndex.json";
export declare const DEFAULT_SITE_URL = "https://grupoagentesiatrabajo.vercel.app";
export type QuartzEntry = {
    slug: string;
    filePath?: string;
    title?: string;
    content?: string;
    tags?: string[];
    links?: string[];
    backlinks?: string[];
    [key: string]: unknown;
};
export type SearchResult = {
    slug: string;
    title: string;
    url: string;
    tags: string[];
    score: number;
    snippet: string;
};
export declare class EncyclopediaIndex {
    private readonly indexUrl;
    private readonly siteUrl;
    private entries;
    private loadedAt?;
    constructor(indexUrl?: string, siteUrl?: string);
    refresh(): Promise<number>;
    get size(): number;
    get lastRefresh(): string | undefined;
    ensureLoaded(): Promise<void>;
    search(query: string, options?: {
        tag?: string;
        limit?: number;
    }): SearchResult[];
    get(slug: string): (QuartzEntry & {
        url: string;
    }) | undefined;
    tags(): {
        tag: string;
        count: number;
    }[];
    list(options?: {
        tag?: string;
        offset?: number;
        limit?: number;
    }): {
        slug: string;
        title: string;
        tags: string[];
        url: string;
    }[];
}
