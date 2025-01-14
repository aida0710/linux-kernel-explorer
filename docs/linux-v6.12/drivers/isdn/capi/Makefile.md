---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/isdn/capi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for the CAPI subsystem used by BT_CMTP

obj-$(CONFIG_BT_CMTP)			+= kernelcapi.o
kernelcapi-y				:= kcapi.o capiutil.o capi.o
kernelcapi-$(CONFIG_PROC_FS)		+= kcapi_proc.o

```
