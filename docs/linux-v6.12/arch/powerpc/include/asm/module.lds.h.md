---
sidebar_position: 162
---
# module.lds.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/module.lds.h`

### コンテンツ

```h
/* Force alignment of .toc section.  */
SECTIONS
{
	.toc 0 : ALIGN(256)
	{
		*(.got .toc)
	}
}

```
