---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/typec/tipd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS_trace.o			:= -I$(src)

obj-$(CONFIG_TYPEC_TPS6598X)	+= tps6598x.o
tps6598x-y			:= core.o
tps6598x-$(CONFIG_TRACING)	+= trace.o

```
