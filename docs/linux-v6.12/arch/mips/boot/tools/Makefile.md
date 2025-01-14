---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/tools/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

hostprogs	+= relocs
relocs-objs	+= relocs_32.o
relocs-objs	+= relocs_64.o
relocs-objs	+= relocs_main.o
PHONY += relocs
relocs: $(obj)/relocs
	@:

```
