---
sidebar_position: 7
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/sni/Platform`

### コンテンツ

```txt
#
# SNI RM
#
cflags-$(CONFIG_SNI_RM)		+= -I$(srctree)/arch/mips/include/asm/mach-rm
ifdef CONFIG_CPU_LITTLE_ENDIAN
load-$(CONFIG_SNI_RM)		+= 0xffffffff80600000
else
load-$(CONFIG_SNI_RM)		+= 0xffffffff80030000
endif
all-$(CONFIG_SNI_RM)		:= $(COMPRESSION_FNAME).ecoff

```
