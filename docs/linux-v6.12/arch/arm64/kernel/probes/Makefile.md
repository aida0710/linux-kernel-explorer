---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm64/kernel/probes/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_KPROBES)		+= kprobes.o decode-insn.o	\
				   kprobes_trampoline.o		\
				   simulate-insn.o
obj-$(CONFIG_UPROBES)		+= uprobes.o decode-insn.o	\
				   simulate-insn.o

```
