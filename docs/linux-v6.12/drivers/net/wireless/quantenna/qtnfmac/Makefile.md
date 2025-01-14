---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/quantenna/qtnfmac/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Copyright (c) 2015-2016 Quantenna Communications, Inc.
# All rights reserved.
#

ccflags-y += \
	-Idrivers/net/wireless/quantenna/qtnfmac

obj-$(CONFIG_QTNFMAC) += qtnfmac.o
qtnfmac-objs += \
	core.o \
	commands.o \
	trans.o \
	cfg80211.o \
	event.o \
	util.o \
	qlink_util.o

#

obj-$(CONFIG_QTNFMAC_PCIE) += qtnfmac_pcie.o

qtnfmac_pcie-objs += \
	shm_ipc.o \
	pcie/pcie.o \
	pcie/pearl_pcie.o \
	pcie/topaz_pcie.o

qtnfmac_pcie-$(CONFIG_DEBUG_FS) += debug.o

```
