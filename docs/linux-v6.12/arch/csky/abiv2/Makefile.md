---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= cacheflush.o
obj-$(CONFIG_CPU_HAS_FPU)	+= fpu.o
obj-y				+= memcmp.o
ifeq ($(CONFIG_HAVE_EFFICIENT_UNALIGNED_STRING_OPS), y)
obj-y				+= memcpy.o
obj-y				+= memmove.o
obj-y				+= memset.o
endif
obj-y				+= strcmp.o
obj-y				+= strcpy.o
obj-y				+= strlen.o
obj-y				+= strksyms.o
obj-$(CONFIG_FUNCTION_TRACER)	+= mcount.o

```
