---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/broadcom/brcm80211/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
#
# Makefile fragment for Broadcom 802.11 Networking Device Driver
#
# Copyright (c) 2010 Broadcom Corporation
#

# common flags
subdir-ccflags-$(CONFIG_BRCMDBG)	+= -DDEBUG

obj-$(CONFIG_BRCMUTIL)	+= brcmutil/
obj-$(CONFIG_BRCMFMAC)	+= brcmfmac/
obj-$(CONFIG_BRCMSMAC)	+= brcmsmac/

```
