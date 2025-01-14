---
sidebar_position: 14
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/gdm724x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_LTE_GDM724X) := gdmulte.o
gdmulte-y += gdm_lte.o netlink_k.o
gdmulte-y += gdm_usb.o gdm_endian.o

obj-$(CONFIG_LTE_GDM724X) += gdmtty.o
gdmtty-y := gdm_tty.o gdm_mux.o


```
