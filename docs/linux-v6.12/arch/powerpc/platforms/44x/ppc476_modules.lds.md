---
sidebar_position: 19
---
# ppc476_modules.lds

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/44x/ppc476_modules.lds`

### コンテンツ

```lds
SECTIONS
{
	.text : ALIGN(4096)
	{
		*(.text .text.* .fixup)
	}
	.init.text : ALIGN(4096)
	{
		*(.init.text .init.text.*)
	}
	.exit.text : ALIGN(4096)
	{
		*(.exit.text .exit.text.*)
	}
}

```
