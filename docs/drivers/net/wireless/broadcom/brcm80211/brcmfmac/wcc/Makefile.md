---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/broadcom/brcm80211/brcmfmac/wcc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
#
# Copyright (c) 2022 Broadcom Corporation

ccflags-y += \
	-I $(src) \
	-I $(src)/.. \
	-I $(src)/../../include

obj-m += brcmfmac-wcc.o
brcmfmac-wcc-objs += \
		core.o module.o

```
