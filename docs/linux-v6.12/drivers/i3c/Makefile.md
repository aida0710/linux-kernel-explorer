---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/i3c/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
i3c-y				:= device.o master.o
obj-$(CONFIG_I3C)		+= i3c.o
obj-$(CONFIG_I3C)		+= master/

```
