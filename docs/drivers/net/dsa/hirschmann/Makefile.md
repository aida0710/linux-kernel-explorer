---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/dsa/hirschmann/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_NET_DSA_HIRSCHMANN_HELLCREEK)	+= hellcreek_sw.o
hellcreek_sw-objs := hellcreek.o
hellcreek_sw-objs += hellcreek_ptp.o
hellcreek_sw-objs += hellcreek_hwtstamp.o

```
