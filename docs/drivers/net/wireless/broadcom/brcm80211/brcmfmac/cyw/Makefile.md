---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/broadcom/brcm80211/brcmfmac/cyw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
#
# Copyright (c) 2022 Broadcom Corporation

ccflags-y += \
	-I $(src) \
	-I $(src)/.. \
	-I $(src)/../../include

obj-m += brcmfmac-cyw.o
brcmfmac-cyw-objs += \
		core.o module.o

```
