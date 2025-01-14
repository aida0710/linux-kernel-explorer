---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/alpha/math-emu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the FPU instruction emulation.
#

ccflags-y := -w

obj-$(CONFIG_MATHEMU) += math-emu.o

math-emu-objs := math.o

```
