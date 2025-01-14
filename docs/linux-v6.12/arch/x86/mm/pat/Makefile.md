---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/mm/pat/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-y				:= set_memory.o memtype.o

obj-$(CONFIG_X86_PAT)		+= memtype_interval.o

```
