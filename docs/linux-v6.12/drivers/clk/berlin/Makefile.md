---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/berlin/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y += berlin2-avpll.o berlin2-pll.o berlin2-div.o
obj-$(CONFIG_MACH_BERLIN_BG2)	+= bg2.o
obj-$(CONFIG_MACH_BERLIN_BG2CD)	+= bg2.o
obj-$(CONFIG_MACH_BERLIN_BG2Q)	+= bg2q.o

```
