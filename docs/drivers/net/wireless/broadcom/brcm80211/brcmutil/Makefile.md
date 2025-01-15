---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/broadcom/brcm80211/brcmutil/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
#
# Makefile fragment for Broadcom 802.11n Networking Device Driver Utilities
#
# Copyright (c) 2011 Broadcom Corporation
#
ccflags-y := -I $(src)/../include

obj-$(CONFIG_BRCMUTIL)	+= brcmutil.o
brcmutil-objs	= utils.o d11.o

```
