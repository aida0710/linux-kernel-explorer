---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vme_user/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the VME device drivers.
#

obj-$(CONFIG_VME_BUS)		+= vme.o
obj-$(CONFIG_VME_USER)		+= vme_user.o
obj-$(CONFIG_VME_TSI148)	+= vme_tsi148.o
obj-$(CONFIG_VME_FAKE)		+= vme_fake.o

```
