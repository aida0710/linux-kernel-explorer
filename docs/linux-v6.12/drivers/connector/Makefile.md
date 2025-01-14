---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/connector/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CONNECTOR)		+= cn.o
obj-$(CONFIG_PROC_EVENTS)	+= cn_proc.o

cn-y				+= cn_queue.o connector.o

```
