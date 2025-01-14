---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/sh/clk/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y	:= core.o

obj-$(CONFIG_SH_CLK_CPG)	+= cpg.o

```
