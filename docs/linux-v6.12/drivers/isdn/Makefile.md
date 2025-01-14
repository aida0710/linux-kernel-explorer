---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/isdn/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for the kernel ISDN subsystem and device drivers.

# Object files in subdirectories

obj-$(CONFIG_BT_CMTP)			+= capi/
obj-$(CONFIG_MISDN)			+= mISDN/
obj-$(CONFIG_ISDN)			+= hardware/

```
