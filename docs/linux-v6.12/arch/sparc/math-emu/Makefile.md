---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sparc/math-emu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the FPU instruction emulation.
#

# suppress all warnings - as math.c produces a lot!
ccflags-y := -w

obj-y    := math_$(BITS).o

```
