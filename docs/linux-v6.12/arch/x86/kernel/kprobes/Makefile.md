---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/kprobes/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for kernel probes
#

obj-$(CONFIG_KPROBES)		+= core.o
obj-$(CONFIG_OPTPROBES)		+= opt.o
obj-$(CONFIG_KPROBES_ON_FTRACE)	+= ftrace.o

```
