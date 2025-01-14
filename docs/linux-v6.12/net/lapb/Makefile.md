---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/lapb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux LAPB layer.
#

obj-$(CONFIG_LAPB) += lapb.o

lapb-y := lapb_in.o lapb_out.o lapb_subr.o lapb_timer.o lapb_iface.o

```
