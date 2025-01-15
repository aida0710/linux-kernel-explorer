---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `net/x25/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux X.25 Packet layer.
#

obj-$(CONFIG_X25) += x25.o

x25-y			:= af_x25.o x25_dev.o x25_facilities.o x25_in.o \
			   x25_link.o x25_out.o x25_route.o x25_subr.o \
			   x25_timer.o x25_proc.o x25_forward.o
x25-$(CONFIG_SYSCTL)	+= sysctl_net_x25.o

```
