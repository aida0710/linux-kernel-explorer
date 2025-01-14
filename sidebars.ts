import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // カーネルコードのサイドバー
  kernelSidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    }
  ],

  // アーキテクチャのサイドバー
  architectureSidebar: [
    {
      type: 'doc',
      id: 'arch/intro',
      label: 'アーキテクチャ概要'
    }
  ],

  // サブシステムのサイドバー
  subsystemSidebar: [
    {
      type: 'doc',
      id: 'subsystems/intro',
      label: 'サブシステム概要'
    }
  ]
};

export default sidebars;