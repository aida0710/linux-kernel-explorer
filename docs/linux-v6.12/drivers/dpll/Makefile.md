---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dpll/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for DPLL drivers.
#

obj-$(CONFIG_DPLL)      += dpll.o
dpll-y                  += dpll_core.o
dpll-y                  += dpll_netlink.o
dpll-y                  += dpll_nl.o

```
