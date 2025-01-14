---
sidebar_position: 13
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/ath25/Platform`

### コンテンツ

```txt
#
# Atheros AR531X/AR231X WiSoC
#
cflags-$(CONFIG_ATH25)		+= -I$(srctree)/arch/mips/include/asm/mach-ath25
load-$(CONFIG_ATH25)		+= 0xffffffff80041000

```
