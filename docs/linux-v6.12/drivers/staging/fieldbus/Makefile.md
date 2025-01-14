---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/fieldbus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for fieldbus_dev drivers.
#

obj-$(CONFIG_FIELDBUS_DEV)	+= fieldbus_dev.o anybuss/
fieldbus_dev-y			:= dev_core.o

```
