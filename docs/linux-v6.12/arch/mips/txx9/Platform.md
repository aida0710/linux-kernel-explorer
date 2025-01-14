---
sidebar_position: 3
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/txx9/Platform`

### コンテンツ

```txt
cflags-$(CONFIG_MACH_TX49XX)	+=					\
		 -I$(srctree)/arch/mips/include/asm/mach-tx49xx

load-$(CONFIG_MACH_TX49XX)	+= 0xffffffff80100000

```
