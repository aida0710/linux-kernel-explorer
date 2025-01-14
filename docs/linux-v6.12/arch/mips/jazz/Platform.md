---
sidebar_position: 5
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/jazz/Platform`

### コンテンツ

```txt
#
# Acer PICA 61, Mips Magnum 4000 and Olivetti M700.
#
cflags-$(CONFIG_MACH_JAZZ)	+= -I$(srctree)/arch/mips/include/asm/mach-jazz
load-$(CONFIG_MACH_JAZZ)	+= 0xffffffff80080000

```
