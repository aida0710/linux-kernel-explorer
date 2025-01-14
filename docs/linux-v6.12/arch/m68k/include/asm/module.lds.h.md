---
sidebar_position: 110
---
# module.lds.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/module.lds.h`

### コンテンツ

```h
SECTIONS {
	.m68k_fixup : {
		__start_fixup = .;
		*(.m68k_fixup)
		__stop_fixup = .;
	}
}

```
