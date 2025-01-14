---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/fieldbus/anybuss/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for anybuss drivers.
#

obj-$(CONFIG_HMS_ANYBUSS_BUS)	+= anybuss_core.o
anybuss_core-y			+= host.o

obj-$(CONFIG_ARCX_ANYBUS_CONTROLLER) += arcx-anybus.o
obj-$(CONFIG_HMS_PROFINET)	+= hms-profinet.o

```
