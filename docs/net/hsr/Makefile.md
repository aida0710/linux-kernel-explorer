---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `net/hsr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for HSR
#

obj-$(CONFIG_HSR)	+= hsr.o

hsr-y			:= hsr_main.o hsr_framereg.o hsr_device.o \
			   hsr_netlink.o hsr_slave.o hsr_forward.o
hsr-$(CONFIG_DEBUG_FS) += hsr_debugfs.o

```
