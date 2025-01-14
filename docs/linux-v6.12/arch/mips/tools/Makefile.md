---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/tools/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
hostprogs := elf-entry
PHONY += elf-entry
elf-entry: $(obj)/elf-entry
	@:

hostprogs += loongson3-llsc-check
PHONY += loongson3-llsc-check
loongson3-llsc-check: $(obj)/loongson3-llsc-check
	@:

```
