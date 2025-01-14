---
sidebar_position: 8
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/cobalt/Platform`

### コンテンツ

```txt
#
# Cobalt Server
#
cflags-$(CONFIG_MIPS_COBALT)	+= -I$(srctree)/arch/mips/include/asm/mach-cobalt
load-$(CONFIG_MIPS_COBALT)	+= 0xffffffff80080000

```
