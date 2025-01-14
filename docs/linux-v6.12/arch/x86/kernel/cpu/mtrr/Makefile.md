---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/cpu/mtrr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y		:= mtrr.o if.o generic.o cleanup.o
obj-$(CONFIG_X86_32) += amd.o cyrix.o centaur.o legacy.o


```
