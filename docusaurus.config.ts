import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Linux Kernel Explorer',
    tagline: 'Exploring Linux Kernel v6.12 Implementation',
    favicon: 'img/favicon.ico',

    // プロジェクトのURL設定
    url: 'https://your-domain.com',
    baseUrl: '/',
    trailingSlash: false,

    // GitHubページの設定
    organizationName: 'your-org',
    projectName: 'linux-kernel-explorer',

    // オンビルド設定
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    onBrokenAnchors: 'warn',
    onDuplicateRoutes: 'warn',

    // 多言語設定
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
        localeConfigs: {
            ja: {
                label: '日本語',
                direction: 'ltr',
                htmlLang: 'ja',
            },
        },
    },

    // クラシックプリセットの設定
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/your-org/linux-kernel-explorer/tree/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    breadcrumbs: true,
                    sidebarCollapsed: true,
                },
                blog: {
                    showReadingTime: true,
                    readingTime: ({ content, frontMatter, defaultReadingTime }) =>
                        defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
                    blogTitle: 'カーネル解説ブログ',
                    blogDescription: 'Linuxカーネルの実装についての詳細な解説',
                    postsPerPage: 10,
                    blogSidebarTitle: '最新の記事',
                    blogSidebarCount: 'ALL',
                    feedOptions: {
                        type: ['rss', 'json'],
                        copyright: `Copyright © ${new Date().getFullYear()} Linux Kernel Explorer`,
                    },
                },
                theme: {
                    customCss: [
                        './src/css/custom.css',
                        './src/css/tailwind.css',
                    ],
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
            } satisfies Preset.Options,
        ],
    ],

    // プラグインの設定
    plugins: [
        // Tailwind CSS
        async function tailwindcss() {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
        // ローカル検索機能
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['ja', 'en'],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                searchResultLimits: 8,
                searchResultContextMaxLength: 50,
                searchBarPosition: 'right',
                searchBarShortcutHint: true,
                indexBlog: true,
                indexPages: true,
                indexDocs: true,
            },
        ],
    ],

    // テーマ設定
    themeConfig: {
        // metadata
        metadata: [
            { name: 'keywords', content: 'linux, kernel, documentation, implementation' },
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],

        // ナビゲーションバー
        navbar: {
            title: 'Linux Kernel Explorer',
            logo: {
                alt: 'Linux Kernel Explorer Logo',
                src: 'img/open-book.png',
            },
            hideOnScroll: false,
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'kernelSidebar',
                    position: 'left',
                    label: 'カーネルコード',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'architectureSidebar',
                    position: 'left',
                    label: 'アーキテクチャ',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'subsystemSidebar',
                    position: 'left',
                    label: 'サブシステム',
                },
                {
                    to: '/blog',
                    label: '解説記事',
                    position: 'left',
                },
                {
                    href: 'https://github.com/your-org/linux-kernel-explorer',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },

        // フッター
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'ドキュメント',
                    items: [
                        {
                            label: 'はじめに',
                            to: '/docs/intro',
                        },
                        {
                            label: 'ファイル構造',
                            to: '/docs/structure',
                        },
                        {
                            label: 'ビルドシステム',
                            to: '/docs/build-system',
                        },
                    ],
                },
                {
                    title: 'コミュニティ',
                    items: [
                        {
                            label: 'GitHub Discussions',
                            href: 'https://github.com/your-org/linux-kernel-explorer/discussions',
                        },
                    ],
                },
                {
                    title: '関連リンク',
                    items: [
                        {
                            label: 'Linux Kernel Archives',
                            href: 'https://www.kernel.org/',
                        },
                        {
                            label: 'Linux Cross Reference',
                            href: 'https://elixir.bootlin.com/linux/latest/source',
                        },
                        {
                            label: 'LWN.net',
                            href: 'https://lwn.net/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Linux Kernel Explorer Project. Built with Docusaurus.`,
        },

        // シンタックスハイライト
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            defaultLanguage: 'c',
            additionalLanguages: [
                'c',
                'cpp',
                'asm6502',
                'x86asm',
                'arm',
                'bash',
                'diff',
                'makefile',
                'toml',
                'yaml',
                'json',
                'shell-session',
                'systemd',
                'ini',
                'docker',
                'rust',
                'python',
            ],
            magicComments: [
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: { start: 'highlight-start', end: 'highlight-end' },
                },
                {
                    className: 'code-block-error-line',
                    line: 'error-next-line',
                },
                {
                    className: 'code-block-info-line',
                    line: 'info-next-line',
                },
            ],
        },

        // テーマ設定
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },

        // 目次設定
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 4,
        },

        // その他の設定
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
    } satisfies Preset.ThemeConfig,
};

export default config;